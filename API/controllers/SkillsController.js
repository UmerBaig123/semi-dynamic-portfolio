import { Skills } from "../models/Skills.js";

// Create a new skill
export const createSkill = async (req, res) => {
  try {
    const { skill_name, skill_progress } = req.body;

    if (!skill_name) {
      return res.status(400).json({ message: "Skill name is required" });
    }

    const newSkill = new Skills({ skill_name, skill_progress });
    await newSkill.save();

    res
      .status(201)
      .json({ message: "Skill created successfully", skill: newSkill });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Skill already exists" });
    }
    res
      .status(500)
      .json({ message: "Failed to create skill", error: error.message });
  }
};

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json(skills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch skills", error: error.message });
  }
};

// Get skill by ID
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skills.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.status(200).json(skill);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch skill", error: error.message });
  }
};

// Update skill
export const updateSkill = async (req, res) => {
  try {
    const { skill_name, skill_progress } = req.body;

    const updatedSkill = await Skills.findByIdAndUpdate(
      req.params.id,
      { skill_name, skill_progress },
      { new: true, runValidators: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json({ message: "Skill updated", skill: updatedSkill });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update skill", error: error.message });
  }
};

// Delete skill
export const deleteSkill = async (req, res) => {
  try {
    const deletedSkill = await Skills.findByIdAndDelete(req.params.id);
    if (!deletedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.status(200).json({ message: "Skill deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete skill", error: error.message });
  }
};
