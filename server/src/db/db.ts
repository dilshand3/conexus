import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const connectDB = async (): Promise<void> => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`MongoDB connection succesfully || host :- ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection failed due to ${error}`);
    }
}

export { connectDB }