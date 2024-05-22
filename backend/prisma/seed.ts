import { prisma } from "./db";

console.log("Clearing... 🤙");
await prisma.todo.deleteMany();

console.log("Seeding... 🛠️");

const todo1 = await prisma.todo.create({
  data: {
    title: "Todo 1",
    content: "This is the content for todo 1",
  },
});

const todo2 = await prisma.todo.create({
  data: {
    title: "Todo 2",
    content: "This is the content for todo 2",
  },
});

const todo3 = await prisma.todo.create({
  data: {
    title: "Todo 3",
    content: "This is the content for todo 3",
  },
});

const todo4 = await prisma.todo.create({
  data: {
    title: "Todo 4",
    content: "This is the content for todo 4",
  },
});

console.log("Seeded 🌱");
