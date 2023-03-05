import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeButton, getChangeTitle, getChangeTodo } from "../../Language";
import { getTodoList, addTodo, langChange } from "../../redux/actions";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const language = useSelector((state) => state.App.lang);
  const todos = useSelector((state) => state.App.todos);

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), title }));
    setTitle("");
  };

  const handleLanguageChange = (e) => {
    dispatch(langChange(e.target.value));
  };

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]); //todos

  return (
    <div className=" w-[75%] relative flex justify-center items-center flex-col p-2 bg-orange-200 rounded-lg">
      <h2 className="text-orange-500 font-bold text-4xl m-10">{getChangeTitle(language)}</h2>

      <form className=" w-[70%] flex justify-between " onSubmit={(e) => handleTodo(e)}>
        <input
          className="outline-none p-2 w-[87%] rounded-lg"
          type="text"
          value={title}
          onChange={(e) => handleChange(e)}
          placeholder={getChangeTodo(language)}
        />
        <button className="text-white font-semibold rounded-lg bg-orange-500 w-[10%] " type="submit">
          {getChangeButton(language)}
        </button>
      </form>

      <Todo todos={todos} />

      <select
        className="outline-none absolute top-2 left-5 rounded-lg text-sm w-[10%] text-center bg-orange-500 p-1 text-white font-semibold"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
};

export default memo(Home);
