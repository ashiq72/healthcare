import { Prisma, PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const getAllFromDB = async (params: any) => {
  const andCondions: Prisma.AdminWhereInput[] = [];
  const adminSearchAbaleFields = ["name", "email"];

  if (params.searchTerm) {
    andCondions.push({
      OR: adminSearchAbaleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  const whereConditions: Prisma.AdminWhereInput = { AND: andCondions };

  const result = await prisma.admin.findMany({
    where: whereConditions,
  });

  return result;
};

export const adminService = {
  getAllFromDB,
};
