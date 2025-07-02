import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
  // Handle signup logic
//   console.log("Signup request received:", req.body);
  const { username, email, password } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User( {
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
    
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }

  
};
