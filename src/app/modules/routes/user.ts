import express from "express";
import { userController } from "../controllers/user";

const router = express.Router();

router.post("/", userController.createAdmin);

export const userRoute = router;
