// src/api/auth.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await axios.post(`${BASE_URL}/resume`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
