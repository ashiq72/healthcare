import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  // find first and  throw error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique and throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });
  console.log(findUnique);
};

main();
