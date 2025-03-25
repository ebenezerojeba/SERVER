import mongoose from "mongoose";

export const connectDB = async () => {

    const databaseURL = process.env.MONGO_URI
    await mongoose.connect(databaseURL)
      .then(() => console.log("DB Connection Successful"))
      .catch((err) => console.log("DB Connection Failed", err.message));
    
    
}