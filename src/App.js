import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home";
import Todo from "./screens/Todo";
import TodoItem from "./screens/TodoItem";

function App() {
  return (
    <div className="flex justify-center items-center w-full">
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
