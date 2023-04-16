require("dotenv").config();

module.exports = {
  provider: "cloudinary",
  providerOptions: {
    cloud_name: "dbgqtwnid",
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  }
};
