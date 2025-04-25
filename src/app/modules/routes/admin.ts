import express from "express";
import { AdminController } from "../controllers/admin";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);

export const AdminRoutes = router;
