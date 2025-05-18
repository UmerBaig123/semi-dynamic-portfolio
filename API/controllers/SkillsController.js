import { Skills } from "../models/Skills.js";

// Create a new skill
export const createSkill = async (req, res) => {
  try {
    const skill = new Skills(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get skill by ID
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skills.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: "Skill not found" });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a skill
export const updateSkill = async (req, res) => {
  try {
    const updated = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Skill not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a skill
export const deleteSkill = async (req, res) => {
  try {
    const deleted = await Skills.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Skill not found" });
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
