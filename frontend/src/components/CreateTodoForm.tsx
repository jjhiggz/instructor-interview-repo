import { useState } from "react";
import { useTodos } from "../providers/todos.provider";

export const CreateTodoForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const { createTodo } = useTodos();

  const reset = () => {
    setTitleInput("");
    setContentInput("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo({
          title: titleInput,
          content: contentInput,
        })
          .then(() => {
            reset();
          })
          .catch(() => {});
      }}
    >
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        placeholder="Title...."
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <br></br>
      <label htmlFor="title">Content: </label>
      <input
        type="text"
        placeholder="Content...."
        onChange={(e) => {
          setContentInput(e.target.value);
        }}
      />
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
