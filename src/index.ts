import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Ashiq focusing Prisma 2",
  //       content: "This is content 2",
  //     },
  //   });

  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
