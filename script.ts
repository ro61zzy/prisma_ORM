import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


    //where all the code goes

    //to send data to db
    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@prisma.io',
    //     },
    //   })
    //   console.log(user)
    // }


    //to retrieve data
//     const users = await prisma.user.findMany()
//   console.log(users)


//to explore relationships
// const user = await prisma.user.create({
//     data: {
//       name: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: [
//           {
//             title: 'Hello World',
//             published: true
//           },
//           {
//             title: 'My second post',
//             content: 'This is still a draft'
//           }
//         ],
//       },
//     },
//   })
//   console.log(user)


//Prisma Client only returns scalar fields in the result objects of a query. 



  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })