import { ReactNode, createContext, useContext } from "react";
import { TCreateTodoDTO, TTodo } from "../types";
import { useEffect, useState } from "react";
import { Requests } from "../requests";
type TTodoProvider = {
  todos: TTodo[];
  createTodo: (input: TCreateTodoDTO) => Promise<unknown>;
  deleteTodo: (todoId: number) => undefined;
};

const TodosContext = createContext<null | TTodoProvider>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  useEffect(() => {
    Requests.getAllTodos().then(setTodos);
  }, []);

  const createTodo = (input: TCreateTodoDTO) => {
    setTodos([...todos, { id: -1, ...input }]);

    return fetch(`http://localhost:3000/todo`, {
      method: "POST",
      body: JSON.stringify({
        name: input.title,
        title: input.content,
      }),
    }).catch(() => {
      setTodos(todos);
    });
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );

    return fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (!result.ok) {
        throw new Error("Could not parse result");
      }
      return result;
    });
  };

  return (
    <TodosContext.Provider value={{ todos, createTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const todoContext = useContext(TodosContext);
  if (todoContext === null) {
    throw new Error(
      "Please use `useTodos` within the bounds of a TodoProvider"
    );
  }

  return todoContext;
};
