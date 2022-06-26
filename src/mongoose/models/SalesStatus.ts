import mongoose, { Schema } from "mongoose";

const SalesStatusSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface ISalesStatus {
  name: string;
  description?: string;
}

const SalesStatusSchema = new Schema<ISalesStatus>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  SalesStatusSchemaOptions
);

export const SalesStatus = mongoose.model<ISalesStatus>(
  "SalesStatus",
  SalesStatusSchema
);
