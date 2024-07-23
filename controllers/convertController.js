import asyncHandler from 'express-async-handler';
import XLSX from 'xlsx';
import axios from 'axios';

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

    res.status(200).json({
      message: 'Data Converted',
      data: jsonData,
    });
  } catch (error) {
    // console.log('error', error);
    res.status(500);
    throw new Error('Failed to process the Excel file');
  }
});
