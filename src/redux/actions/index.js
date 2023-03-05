import * as constant from "../constant";

export const addTodo =
  ({ title, id }) =>
  async (dispatch) => {
    try {
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
    } catch (error) {
      console.log("ADD TODO ERR", error);
    }
  };

export const updateTodo =
  ({ todo, inProgress, done, id, title }) =>
  async (dispatch) => {
    console.log("update", { todo, inProgress, done, id, title });
    //id, title,       id,title bunlar bodynişn içindeki

    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          todo,
          inProgress,
          done,
          id,
          title,
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
    } catch (error) {
      console.log("PUT ERR", error);
    }
  };

export const deleteTodo = (id) => async (dispatch) => {
  try {
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
  } catch (error) {
    console.log("DELETE ERR", error);
  }
};

export const getTodoList = (payload) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    dispatch({
      type: constant.GET_TODOS,
      payload: data,
    });
  } catch (error) {
    console.log("GET TODO ERR", error);
  }
};

export const langChange = (payload) => ({
  type: constant.LANG_CHANGE,
  payload,
});

export const detailsTodo = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`).then((res) => res.json());
  dispatch({
    type: constant.DETAILS_TODO,
    payload: response,
  });
};
