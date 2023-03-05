import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Todo from "./screens/Todo";
import TodoItem from "./screens/TodoItem";
import TodoOnly from "./screens/TodoOnly";
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
          <Route path="/todos" element={<TodoItem />} />
          <Route path="/todoitem/:id" element={<TodoOnly />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
