import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Save or update user
router.post("/", async (req, res) => {
  const { name, score } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { name },
      { score },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
