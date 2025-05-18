import { About } from "../models/About.js";

export const createAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      Object.assign(about, req.body);
    } else {
      about = new About(req.body);
    }
    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAbouts = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAboutById = async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) return res.status(404).json({ error: "Not found" });
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const updated = await About.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    const deleted = await About.deleteMany({});
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
