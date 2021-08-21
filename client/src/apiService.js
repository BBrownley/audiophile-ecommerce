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

const apiService = {
  getAllFromCategory
};

export default apiService;
