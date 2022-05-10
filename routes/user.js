import express from "express";
import upload from "../config/multer.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/create", upload.single("avatar"), async (req, res) => {
  const { name, email } = req.body;
  const { path } = req.file;

  await User.create({
    name,
    email,
    avatar: path,
  });

  res.send(path);
});

export default router;
