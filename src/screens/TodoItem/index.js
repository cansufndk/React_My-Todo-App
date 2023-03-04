import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/actions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("todoıtem render");

  return (
    <div>
      <div>
        <p>{item.title}</p>
        <input
          value={item.todo}
          checked={!!item.todo}
          onChange={(e) => dispatch(updateTodo({ todo: !!e.target.value, inProgress: false, done: false, id: item.id, title: item.title }))}
          type={"checkbox"}
        />
        <input
          value={item.inProgress}
          checked={!!item.inProgress}
          type={"checkbox"}
          onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: !!e.target.value, done: false, id: item.id, title: item.title }))}
        />
        <input
          value={item.done}
          checked={!!item.done}
          type={"checkbox"}
          onChange={(e) => dispatch(updateTodo({ todo: false, inProgress: false, done: !!e.target.value, id: item.id, title: item.title }))}
        />
        <button onClick={() => dispatch(deleteTodo(item.id))}>DELETE TODO</button>
      </div>
    </div>
  );
};

export default TodoItem;
