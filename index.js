import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js";
// import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Database Connection
await connectDB();


// CORS Activation
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
