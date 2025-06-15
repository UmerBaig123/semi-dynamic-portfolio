// src/api/auth.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL

export const getSkills = async () => {
  const response = await axios.get(`${BASE_URL}/skills`);
  return response.data;
};

export const createSkill = async (skill) => {
  const response = await axios.post(`${BASE_URL}/skills`, skill);
  return response.data;
};
const deleteSkill = async (id) => {
  const response = await axios.delete(`${BASE_URL}/skills/${id}`);
  return response.data;
};
export const updateSkill = async (skill) => {
  const progress = skill.skill_progress;
  if (progress == 0) {
    return deleteSkill(skill._id);
  }
  const response = await axios.put(`${BASE_URL}/skills/${skill._id}`, skill);
  return response.data;
};
