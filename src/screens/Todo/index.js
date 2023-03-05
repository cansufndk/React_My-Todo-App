import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const Todo = ({ todos }) => {
  console.log("todo render");

  return (
    <div className="mb-10 w-[70%] flex flex-col items-center justiy-center">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default memo(Todo);
