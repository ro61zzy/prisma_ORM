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
//even though you also created a new Post record for the new User record, the console only printed an object with three scalar fields: id, email an
//{ id: 2, email: 'bob@prisma.io', name: 'Bob' }

//In order to also retrieve the Post records that belong to a User, you can use the include option via the posts relation field

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

//to get
// [
//     { id: 1, email: 'alice@prisma.io', name: 'Alice', posts: [] },
//     {
//       id: 2,
//       email: 'bob@prisma.io',
//       name: 'Bob',
//       posts: [
//         {
//           id: 1,
//           title: 'Hello World',
//           content: null,
//           published: true,
//           authorId: 2
//         },
//         {
//           id: 2,
//           title: 'My second post',
//           content: 'This is still a draft',
//           published: false,
//           authorId: 2
//         }
//       ]
//     }
//   ]

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })