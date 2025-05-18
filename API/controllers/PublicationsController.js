// controllers/publicationsController.js
import { Publications } from "../models/Publications.js";

// Create
export const createPublication = async (req, res) => {
  try {
    const publication = new Publications(req.body);
    await publication.save();
    res.status(201).json(publication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read all
export const getPublications = async (req, res) => {
  try {
    const data = await Publications.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read one by ID
export const getPublicationById = async (req, res) => {
  try {
    const pub = await Publications.findById(req.params.id);
    if (!pub) return res.status(404).json({ error: "Not found" });
    res.json(pub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updatePublication = async (req, res) => {
  try {
    const updated = await Publications.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
export const deletePublication = async (req, res) => {
  try {
    const deleted = await Publications.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
