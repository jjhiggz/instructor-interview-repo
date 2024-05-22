import "./App.css";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoCard } from "./components/TodoCard";
import { useTodos } from "./providers/todos.provider";

function App() {
  const { todos } = useTodos();
  return (
    <>
      <h2>Create A todo</h2>
      <CreateTodoForm />
      <h2>Todos</h2>
      <section
        id="todos-section"
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          width: "100%",
        }}
      >
        {todos.map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
      </section>
    </>
  );
}

export default App;
