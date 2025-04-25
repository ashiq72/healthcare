import { Request, Response } from "express";
import { adminService } from "../services/admin";

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAllFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "Admin data fetched!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin data.",
      error: (error as Error).message,
    });
  }
};

export const AdminController = {
  getAllFromDB,
};
