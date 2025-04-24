import express, { Request, Response } from "express";
import { userController } from "../controllers/user";

const router = express.Router();

router.get("/", userController.createAdmin);

export const userRoute = router;
