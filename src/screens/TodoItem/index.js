import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeDelete } from "../../Language";
import { updateTodo, deleteTodo, getUpdateTodos } from "../../redux/actions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.App.lang);
  const [color, setColor] = useState(false);

  const todo = async (e) => {
    dispatch(updateTodo({ todo: !!e.target.value, inProgress: false, done: false, id: item.id, title: item.title }));
  };

  const inProgres = async (e) => {
    dispatch(updateTodo({ todo: false, inProgress: !!e.target.value, done: false, id: item.id, title: item.title }));
  };

  const done = async (e) => {
    dispatch(updateTodo({ todo: false, inProgress: false, done: !!e.target.value, id: item.id, title: item.title }));
    setColor(!color);
  };

  return (
    <div className="p-2 flex flex-row justify-between items-center w-full my-3 relative border-b border-orange-900">
      <p className={`font-semibold text-lg text-${color ? "red" : "orange"}-700`} onClick={() => (window.location = `todoitem/${item.id}`)}>
        {item.title}
      </p>
      <div className="absolute top-[20%] left-[40%]">
        <input className="w-10 bg-orange-500 " id="todo" value={item.todo} checked={!!item.todo} type="checkbox" onChange={todo} />
        <input className="w-10 " value={item.inProgress} checked={!!item.inProgress} type="checkbox" onChange={inProgres} />
        <input className="w-10 " value={item.done} checked={!!item.done} type="checkbox" onChange={done} />
      </div>
      <button className="text-white p-1 font-semibold rounded-lg bg-orange-800 w-[20%] " onClick={() => dispatch(deleteTodo(item.id))}>
        {getChangeDelete(language)}
      </button>
    </div>
  );
};

export default memo(TodoItem);
/*
          className="outline-none absolute top-2 left-5 rounded-lg text-sm w-[10%] text-center bg-orange-500 p-1 text-white font-semibold"


        <label htmlFor="todo" value={item.todo}>
          {item.todo}
        </label>
*/
