import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const getAllFromDB = async () => {
  const result = await prisma.admin.findMany();

  return result;
};

export const adminService = {
  getAllFromDB,
};
