import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const main = async () => {
  // offset pagination
  const offsetPagination = await prisma.post.findMany({
    skip: 6,
    take: 2,
  });

  // offset pagination
  const cursorPagination = await prisma.post.findMany({
    skip: 6,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      // title: "asc",
      id: "desc",
    },
    where: {
      title: "Ashiq focusing Prisma 10",
    },
  });

  console.log(sortedData);
};

main();
