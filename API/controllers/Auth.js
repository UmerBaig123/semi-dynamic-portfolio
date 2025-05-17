import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();

    const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", {
      expiresIn: "4h",
    });
    res.status(201).json({ message: "User registered", token });
  } catch {
    res.status(400).json({ error: "Username already exists" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", {
    expiresIn: "4h",
  });
  res.json({ token });
};

export const protectedRoute = (req, res) => {
  res.json({ message: `Hello, ${req.user.username}` });
};
