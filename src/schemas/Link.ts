import { Schema, model, Document } from 'mongoose';

interface LinkInterface extends Document {
  rotulo: string;
  link: string;
  createDate: Date;
}

const LinkSchemas = new Schema(
  {
    rotulo: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<LinkInterface>("Link", LinkSchemas);