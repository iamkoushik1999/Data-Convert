import mongoose from 'mongoose';

const fileSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
    strict: false,
  }
);

const fileModel = mongoose.model('File', fileSchema);
export default fileModel;
