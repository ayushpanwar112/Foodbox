import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../modles/userModel.js';

// Function to generate a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const registerUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;
             console.log(email);
        // Check if email already exists
        const exists = await userModel.findOne({email});
           
        if (exists) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password length must be greater than 7" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });
        
        const user = await newUser.save();

        // Generate a token for the new user
        const token = createToken(user._id);

        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error("Server error:", error); // For debugging purposes
        res.status(500).json({ success: false, message: "Server error" });
    }
}

const loginUser =async (req,res) => {
    const {email,password} = req.body;
     try {
         const user = await userModel.findOne({email});
         if(!user){
           return  res.status(404).json({success:false,message:"user not found"});

         }
         const  isPassword  = await bcrypt.compare(password,user.password);
             if(!isPassword)
             {
                return res.status(404).json({success:false,message:"Invalid Credentails"});
             }
              const token = createToken(user._id)
              res.status(200).json({success:true,token});
     } catch (error) {
         console.log("error message-->",error);
         res.status(500).json({success:false,message:"error"})
     }
    // Implementation for loginUser

}

export { loginUser, registerUser };
