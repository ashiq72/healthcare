import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Ashiq focusing Prisma 2",
  //       content: "This is content 2",
  //     },
  //   });

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Ashiq focusing Prisma 4",
        content: "This is content 4",
      },
      {
        title: "Ashiq focusing Prisma 5",
        content: "This is content 5",
      },
      {
        title: "Ashiq focusing Prisma 6",
        content: "This is content 6",
      },
      {
        title: "Ashiq focusing Prisma 7",
        content: "This is content 7",
      },
      {
        title: "Ashiq focusing Prisma 8",
        content: "This is content 8",
      },
    ],
  });

  console.log(createMany);
};

main();
