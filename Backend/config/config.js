const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = process.env.MONGO_URI;

try {
  mongoose.connect(db);
  console.log("mongoDB connected");
} catch (error) {
  console.log(error);
}
