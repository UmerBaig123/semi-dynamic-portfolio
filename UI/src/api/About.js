// src/api/auth.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL

export const getAbout = async () => {
  const response = await axios.get(`${BASE_URL}/about`);
  return response.data;
};

export const createAbout = async (userData) => {
  const response = await axios.post(`${BASE_URL}/about`, userData);
  return response.data;
};
