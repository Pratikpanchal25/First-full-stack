import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./src/user.route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/first-full-stack"
    );
  } catch (error) {
    throw error;
  }
};
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

connectDB().then(() => console.log("MONGODB Connected"));

app.listen(8000, () => console.log("The App Is Listening On 5173"));

app.use("/", router);


