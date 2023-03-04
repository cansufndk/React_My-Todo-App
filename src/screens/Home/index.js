import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeButton, getChangeTitle } from "../../Language";
import { getTodoList, addTodo, langChange } from "../../redux/actions";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const todos = useSelector((state) => state.App.todos);
  const language = useSelector((state) => state.App.lang);

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
    console.log(todos);
  }, [dispatch]);

  return (
    <div>
      <h3 className="text-red-500">{getChangeTitle(language)}</h3>

      <form onSubmit={(e) => handleTodo(e)}>
        <input type="text" value={title} onChange={(e) => handleChange(e)} placeholder="New To Do..." />
        <button type="submit">{getChangeButton(language)}</button>
      </form>

      <Todo todos={todos} />

      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
};

export default Home;
/*
      <AddTodo handleChange={handleChange} handleTodo={handleTodo} title={title} />
 */
