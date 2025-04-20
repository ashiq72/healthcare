import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "Atik",
  //     email: "atik@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio",
  //     userId: 4,
  //   },
  // })

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Category 1",
  //   },
  // });
  const createPost = await prisma.post.create({
    data: {
      title: "Category 1",
      content: "This is content",
      authorId: 1,
      postCategory: {
        create: {
          // categoryId: 3
          category: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Ashiq focusing Prisma 9",
  //       content: "This is content 9",
  //     },
  //     {
  //       title: "Ashiq focusing Prisma 10",
  //       content: "This is content 10",
  //     }
  //   ],
  // });
};

main();
