import { Elysia, t } from "elysia";
import { prisma } from "../prisma/db";
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: ["localhost:5173"],
    })
  )
  .get("/", () => "Hello Elysia")
  .get("/todos", () => prisma.todo.findMany())
  .delete(
    "/todos/:id",
    ({ params }) => {
      return prisma.todo.delete({
        where: {
          id: params.id,
        },
      });
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    }
  )
  .post(
    "/todos",
    async ({ body, error }) => {
      const createdTodo = await prisma.todo
        .create({
          data: body,
        })
        .catch(() => null);

      if (!createdTodo) {
        return error(404);
      }

      return createdTodo;
    },
    {
      body: t.Object({
        title: t.String(),
        content: t.String(),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
