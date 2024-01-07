import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { createFeedback } from "../controllers/feedbackController.js";

const router = express.Router();
// verifyUser,
router.post("/:userId", verifyUser, createFeedback);

export default router;
