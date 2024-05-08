import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";
dotenv.config();

// const app = express();
const PORT = process.env.PORT || 3000;

//middlewear
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],

  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  connectDB();
  console.log(`server is listening on ${PORT}`);
});
