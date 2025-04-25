import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  const hassPssword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    email: data.admin.email,
    password: hassPssword,
    role: UserRole.ADMIN,
  };
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });

    const createAdminData = await transactionClient.admin.create({
      data: data.admin,
    });
    return createAdminData;
  });
  return result;
};

export const userServices = {
  createAdmin,
};
