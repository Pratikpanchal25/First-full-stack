import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./src/user.route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config()
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pratikpanchal20040502:psp2004@pratik.z9boe2j.mongodb.net"
    );
  } catch (error) {
    throw error;
  }
};
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

connectDB().then(() => console.log("MONGODB Connected"));

app.listen("8080", () => console.log(`The App Is Listening On 8080`));
app.get("/", (req, res)=>{
  res.send("Server Is Listening")
})

app.use("/", router);


