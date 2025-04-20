import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Ashiq focusing Prisma 41",
      content: "This is content 41",
    },
  });

  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Ashiq focusing Prisma 9",
  //       content: "This is content 9",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 10",
  //       content: "This is content 10",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 11",
  //       content: "This is content 11",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 12",
  //       content: "This is content 12",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 13",
  //       content: "This is content 13",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 14",
  //       content: "This is content 14",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 15",
  //       content: "This is content 15",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 16",
  //       content: "This is content 16",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 17",
  //       content: "This is content 17",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 18",
  //       content: "This is content 18",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 19",
  //       content: "This is content 19",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 20",
  //       content: "This is content 20",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 21",
  //       content: "This is content 21",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 22",
  //       content: "This is content 22",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 23",
  //       content: "This is content 23",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 24",
  //       content: "This is content 24",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 25",
  //       content: "This is content 25",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 26",
  //       content: "This is content 26",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 27",
  //       content: "This is content 27",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 28",
  //       content: "This is content 28",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 29",
  //       content: "This is content 29",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 30",
  //       content: "This is content 30",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 31",
  //       content: "This is content 31",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 32",
  //       content: "This is content 32",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 33",
  //       content: "This is content 33",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 34",
  //       content: "This is content 34",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 35",
  //       content: "This is content 35",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 36",
  //       content: "This is content 36",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 37",
  //       content: "This is content 37",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 38",
  //       content: "This is content 38",
  //     },
  //   ],
  // });

  // console.log(createMany);
};

main();
