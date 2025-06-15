import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL
export const createPublication = async (publication) => {
  try {
    const response = await axios.post(`${BASE_URL}/publications`, publication, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating publication:", error);
    throw error;
  }
};
export const getPublications = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/publications`);
    return response.data;
  } catch (error) {
    console.error("Error fetching publications:", error);
    throw error;
  }
};

export const deletePublication = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/publications/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting publication:", error);
    throw error;
  }
};
