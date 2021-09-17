import express from "express";

const router = express.Router();

//controllers
import { register } from "../controllers/auth";

//routes
router.post("/register", register);

module.exports = router;
