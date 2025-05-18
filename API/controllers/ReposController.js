import { Repo } from "../models/Repo.js";

// Create repo
export const createRepo = async (req, res) => {
  try {
    const repo = new Repo(req.body);
    await repo.save();
    res.status(201).json(repo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all repos
export const getAllRepos = async (req, res) => {
  try {
    const repos = await Repo.find();
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get repo by ID
export const getRepoById = async (req, res) => {
  try {
    const repo = await Repo.findById(req.params.id);
    if (!repo) return res.status(404).json({ error: "Repo not found" });
    res.json(repo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update repo
export const updateRepo = async (req, res) => {
  try {
    const updated = await Repo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Repo not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete repo
export const deleteRepo = async (req, res) => {
  try {
    const deleted = await Repo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Repo not found" });
    res.json({ message: "Repo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
