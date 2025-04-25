import { Request, Response } from "express";
import { userServices } from "../services/user";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      // message: error?.message || "Failed to create admin.",
      error: (error as Error).message,
    });
  }
};

export const userController = {
  createAdmin,
};
