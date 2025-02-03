const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: "jwt_secret",
  IMAGE_PATH: __dirname + "../uploads/images",
  DOCS_PATH: __dirname + "../uploads/docs",
  VIDEOS_PATH: __dirname + "../uploads/videos",
};
