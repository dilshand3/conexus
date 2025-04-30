import mongoose, { Schema, Document } from "mongoose";

interface Iurl extends Document {
    originalUrl: string;
    shortUrl: string;
}

const urlSchema = new Schema<Iurl>({
    originalUrl: {
        type: String,
    },
    shortUrl: {
        type: String,
        unique: true
    }
});

export const URL = mongoose.model<Iurl>("URL", urlSchema);