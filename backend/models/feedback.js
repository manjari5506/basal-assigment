import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    feebackText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
