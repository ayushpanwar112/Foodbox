import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Address: { type: String, required: true }
    cartData: { type: Object, default: {} } 
}, { minimize: false });

// Correct model definition
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
