import asyncHandler from 'express-async-handler';
import XLSX from 'xlsx';
import axios from 'axios';
// Model
import dataModel from '../models/dataModel.js';
import fileModel from '../models/fileModel.js';

// ----------------------------------------------------------

// Convert Data
export const convert = asyncHandler(async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400);
    throw new Error('Please Select an Excel file');
  }

  try {
    // GET the file from Cloudinary
    const response = await axios.get(file.path, {
      responseType: 'arraybuffer',
    });
    // Read the Excel file data
    const workbook = XLSX.read(response.data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    const fileData = {
      file: file.path,
      data: jsonData.length,
    };

    // Saving Excel Info
    const fileInfo = await fileModel.create(fileData);

    const result = jsonData.map((obj) => {
      obj.fileId = fileInfo._id;
      obj.file = file.path;
      return obj;
    });

    // Saving Excel Data
    await dataModel.insertMany(result);

    res.status(200).json({
      message: 'Data Saved Successfully',
      // data: jsonData,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500);
    throw new Error('Failed to process the Excel file');
  }
});
