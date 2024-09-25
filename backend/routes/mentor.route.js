import express from "express";
import { mentorDetails } from "../controllers/mentor.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authorizeMentor } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/details", protectRoute, authorizeMentor, mentorDetails);

export default router;