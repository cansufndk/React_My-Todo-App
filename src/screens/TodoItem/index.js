import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeDelete } from "../../Language";
import { updateTodo, deleteTodo } from "../../redux/actions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.App.lang);
  console.log("todoıtem render");

  return (
    <div className=" flex flex-row justify-between items-center w-full my-3 relative border-b border-orange-900 ">
      <p className="font-semibold text-lg text-orange-700 ">{item.title}</p>
      <div className="absolute top-[20%] left-[40%]">
        <input
          className="w-10 bg-orange-500"
          value={item.todo}
          checked={!!item.todo}
          onChange={(e) => dispatch(updateTodo({ todo: !!e.target.value, inProgress: false, done: false, id: item.id, title: item.title }))}
          type={"checkbox"}
        />
        <input
          className="w-10 "
          value={item.inProgress}
          checked={!!item.inProgress}
          type={"checkbox"}
          onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: !!e.target.value, done: false, id: item.id, title: item.title }))}
        />
        <input
          className="w-10"
          value={item.done}
          checked={!!item.done}
          type={"checkbox"}
          onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: false, done: !!e.target.value, id: item.id, title: item.title }))}
        />
      </div>
      <button className="text-white p-1 font-semibold rounded-lg bg-orange-800 w-[20%] " onClick={() => dispatch(deleteTodo(item.id))}>
        {getChangeDelete(language)}
      </button>
    </div>
  );
};

export default TodoItem;
