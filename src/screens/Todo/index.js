import React, { memo } from "react";
import TodoItem from "../TodoItem";

const Todo = ({ todos }) => {
  console.log("todo render");
  console.log(todos, "Todo todos");

  return (
    <div>
      TODO
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default memo(Todo);
