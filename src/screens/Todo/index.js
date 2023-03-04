import React, { memo } from "react";
import TodoItem from "../TodoItem";

const Todo = ({ todos }) => {
  console.log("todo render");
  console.log(todos, "Todo todos");

  return (
    <div className="mb-10 w-[70%] flex flex-col items-center justiy-center">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default memo(Todo);
