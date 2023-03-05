import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../TodoItem";
import * as constant from "../../redux/constant";

const Todo = ({ todos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const response = fetch("http://localhost:3000/todos").then((res) => res.json());

    dispatch({
      type: constant.UPDATE_TODO,
      payload: response,
    });
  }, [dispatch]);

  return (
    <div className="mb-10 w-[70%] flex flex-col items-center justiy-center">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default memo(Todo);
