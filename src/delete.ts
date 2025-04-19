import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: "Ashiq focusing Prisma 4",
    },
  });
  console.log(deleteMany);
};

main();
