import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "Ahad focusing Prisma 4",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Ashiq focusing Prisma 4",
    },
    data: {
      published: true,
    },
  });
  console.log(updateMany);
};

main();
