import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsTodo, updateTodo, deleteTodo } from "../../redux/actions";
import { getChangeDelete, getChangeTodoItem } from "../../Language";

const TodoOnly = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.App.todos);
  const language = useSelector((state) => state.App.lang);

  useEffect(() => {
    dispatch(detailsTodo(id));
  }, []);

  return (
    <div className="rounded-lg border-b bg-orange-200 p-2 w-[75%] flex flex-col justify-center items-center">
      <h1 className="text-orange-500 font-bold text-4xl m-10">{getChangeTodoItem(language)}</h1>
      {todos.map((item, index) => (
        <div key={index} className="p-2 flex flex-row justify-between items-center w-full my-3 relative border-b border-orange-900">
          <p className="font-semibold text-lg text-orange-700" onClick={() => (window.location = `todoitem/${item.id}`)}>
            {item.title}
          </p>
          <div className="absolute top-[20%] left-[40%]">
            <input
              className="w-10 bg-orange-500 "
              value={item.todo}
              checked={!!item.todo}
              type="checkbox"
              onChange={(e) => dispatch(updateTodo({ todo: !!e.target.value, inProgress: false, done: false, id: item.id, title: item.title }))}
            />
            <input
              className="w-10 "
              value={item.inProgress}
              checked={!!item.inProgress}
              type="checkbox"
              onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: !!e.target.value, done: false, id: item.id, title: item.title }))}
            />
            <input
              className="w-10 "
              value={item.done}
              checked={!!item.done}
              type="checkbox"
              onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: false, done: !!e.target.value, id: item.id, title: item.title }))}
            />
          </div>
          <button className="text-white p-1 font-semibold rounded-lg bg-orange-800 w-[20%] " onClick={() => dispatch(deleteTodo(item.id))}>
            {getChangeDelete(language)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoOnly;
