import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import feedbackRoute from "./routes/feedback.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const corsOptions = {
  origin: true,
  credentials: true,
};

// database connection
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB database connection failed", port);
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/feedback", feedbackRoute);

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
