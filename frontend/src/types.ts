import { z } from "zod";

export const sTodo = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

export const sCreateTodo = sTodo.omit({
  id: true,
});

export type TCreateTodoDTO = z.infer<typeof sCreateTodo>;

export type TTodo = z.infer<typeof sTodo>;
