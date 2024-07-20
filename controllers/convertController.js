// External Modules
import asyncHandler from 'express-async-handler';
// Model
import dataModel from '../models/dataModel.js';

// ----------------------------------------------------------

// Upload
export const convert = asyncHandler(async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400);
    throw new Error('Please Select an Excel file');
  }

  try {
    const filePath = file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

    res.status(200).json({ data: jsonData });
  } catch (error) {
    console.log('error', error);
    res.status(500);
    throw new Error('Failed to process the Excel file');
  }
});
