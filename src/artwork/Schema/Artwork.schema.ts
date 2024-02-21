import { Schema } from "mongoose";

export const ArtworkSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String, required: true },
    createdAt: { type: Date, required: true }
});