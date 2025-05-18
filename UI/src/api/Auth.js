// src/api/auth.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};
