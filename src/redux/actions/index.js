import * as constant from "../constant";

export const addTodo =
  ({ title, id }) =>
  async (dispatch) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        id,
        title,
        todo: true,
        inProgress: false,
        done: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    dispatch({
      type: constant.ADD_TODO,
      payload: data,
    });
  };

export const updateTodo =
  ({ todo, inProgress, done, id, title }) =>
  async (dispatch) => {
    console.log({ todo, inProgress, done, id, title });
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title,
        todo,
        inProgress,
        done,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    dispatch({
      type: constant.UPDATE_TODO,
      payload: data,
    });
  };

export const deleteTodo = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  dispatch({
    type: constant.DELETE_TODO,
    payload: data,
  });
};

export const getTodoList = (payload) => async (dispatch) => {
  const response = await fetch("http://localhost:3000/todos");
  const data = await response.json();

  console.log(data);

  dispatch({
    type: constant.GET_TODOS,
    payload: data,
  });
};

export const langChange = (payload) => ({
  type: constant.LANG_CHANGE,
  payload,
});
