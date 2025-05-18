import { Teachings } from "../models/Teachings.js";

// Create
export const createTeaching = async (req, res) => {
  try {
    const teaching = new Teachings(req.body);
    await teaching.save();
    res.status(201).json(teaching);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All
export const getAllTeachings = async (req, res) => {
  try {
    const teachings = await Teachings.find();
    res.json(teachings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read by ID
export const getTeachingById = async (req, res) => {
  try {
    const teaching = await Teachings.findById(req.params.id);
    if (!teaching) return res.status(404).json({ error: "Teaching not found" });
    res.json(teaching);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const updateTeaching = async (req, res) => {
  try {
    const updated = await Teachings.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Teaching not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
export const deleteTeaching = async (req, res) => {
  try {
    const deleted = await Teachings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Teaching not found" });
    res.json({ message: "Teaching deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
