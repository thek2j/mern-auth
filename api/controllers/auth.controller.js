import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email });
  if (!validUser) {
    res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcryptjs.compare(password, validUser.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

  const { password: hashedPassword, ...rest } = validUser._doc;

  res
    .cookie("access_token", token, { httpOnly: true, maxAge: 3600000 })
    .status(200)
    .json(rest);
};
