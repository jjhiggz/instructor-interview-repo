import { z } from "zod";
import { TCreateTodoDTO, sTodo } from "./types";

const baseUrl = "http://localhost:3000";

const getAllTodos = () =>
  fetch(`${baseUrl}/todos`)
    .then((response) => response.json())
    .then(z.array(sTodo).parse);

const createTodo = (input: TCreateTodoDTO) => {
  return fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  })
    .then((response) => response.json())
    .then(sTodo.parse);
};

export const Requests = {
  getAllTodos,
  createTodo,
};
