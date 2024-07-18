import mongoose from 'mongoose';

const dataSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
    strict: false,
  }
);

const dataModel = mongoose.model('Data', dataSchema);
export default dataModel;
