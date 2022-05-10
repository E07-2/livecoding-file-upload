import express from "express";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/create", upload.single("avatar"), async (req, res) => {
  res.send("ok");
});

export default router;
