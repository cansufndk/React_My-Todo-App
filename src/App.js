import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Todo from "./screens/Todo";
import TodoItem from "./screens/TodoItem";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="flex justify-center items-center w-full">
      <Helmet>
        <title>My Todo App</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todoitem" element={<TodoItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
