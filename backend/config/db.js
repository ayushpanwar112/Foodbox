import mongoose from "mongoose";

export const ConnectDb =async()=>{
    await mongoose.connect(process.env.DB_KEY)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.error("DB connection error:", err));
}