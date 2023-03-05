import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChangeDelete } from "../../Language";
import { updateTodo, deleteTodo } from "../../redux/actions";

const TodoItem = ({ item }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.App.lang);
  console.log("todoıtem render");

  const check = async (e) => {
    dispatch(updateTodo({ todo: !!e.target.value, inProgress: false, done: false, id: id, title: item.title }));
  };

  const checkTwo = async (e) => {
    dispatch(updateTodo({ todo: false, inProgress: !!e.target.value, done: false, id: item.id, title: item.title }));
  };

  const checkThree = async (e) => {
    dispatch(updateTodo({ todo: false, inProgress: false, done: !!e.target.value, id: item.id, title: item.title }));
  };

  useEffect(() => {}, []);

  return (
    <div className=" flex flex-row justify-between items-center w-full my-3 relative border-b border-orange-900 ">
      <p className="font-semibold text-lg text-orange-700 ">{item.title}</p>
      <div className="absolute top-[20%] left-[40%]">
        <input className="w-10 bg-orange-500 " value={item.todo} checked={!!item.todo} type={"checkbox"} onChange={check} />
        <input className="w-10 " value={item.inProgress} checked={!!item.inProgress} type={"checkbox"} onChange={checkTwo} />
        <input className="w-10 " value={item.done} checked={!!item.done} type={"checkbox"} onChange={checkThree} />
      </div>
      <button className="text-white p-1 font-semibold rounded-lg bg-orange-800 w-[20%] " onClick={() => dispatch(deleteTodo(item.id))}>
        {getChangeDelete(language)}
      </button>
    </div>
  );
};

export default memo(TodoItem);
