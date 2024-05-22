import { useTodos } from "../providers/todos.provider";
import { TTodo } from "../types";

export const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { deleteTodo } = useTodos();
  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "25px",
        padding: 10,
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "tomato",
          width: 20,
          height: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        X
      </div>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
    </div>
  );
};
