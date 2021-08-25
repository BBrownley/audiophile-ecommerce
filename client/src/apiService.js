import axios from "axios";
import qs from "qs";

const baseUrl = "http://localhost:1337";

// Get all items belonging to a category
const getAllFromCategory = async category => {
  try {
    const req = await axios.get(`${baseUrl}/products/category/${category}`);
    return req.data;
  } catch (exception) {
    console.log(exception);
  }
};

// Get single item from ID
const getItemById = async id => {
  try {
    const req = await axios.get(`${baseUrl}/products?id=${id}`);
    return req.data[0];
  } catch (exception) {
    console.log(exception);
  }
};

const apiService = {
  getAllFromCategory,
  getItemById
};

export default apiService;
