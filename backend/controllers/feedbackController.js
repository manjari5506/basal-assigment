import User from "../models/user.js";
import Feedback from "../models/feedback.js"


export const createFeedback = async (req, res) => {
  const userId = req.params.userId;
  const newFeedback = new Feedback({ ...req.body });

  try {
    const savedFeedback = await newFeedback.save();

    await User.findByIdAndUpdate(userId, {
      $push: { feedbacks: savedFeedback._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Feedback submitted", data: savedFeedback });
  } catch (err) {
    res.status(500).json({ success: false, message: "Feedback submitted" });
  }
};
