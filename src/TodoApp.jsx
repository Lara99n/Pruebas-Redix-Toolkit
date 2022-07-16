import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todosId, setTodosId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todoId, isLoading } = useGetTodoByIdQuery(todosId);
  console.log(todoId);

  const nextTodo = () => {
    setTodosId(todosId + 1);
  };

  const prevTodo = () => {
    if (todosId === 1) return;
    setTodosId(todosId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading.. {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todoId)}</pre>
      {/*  <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Completado" : "Pending"} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
