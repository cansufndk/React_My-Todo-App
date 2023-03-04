import * as constant from "../constant";

const INITIAL_STATE = {
  todos: [],
  lang: "tr",
};

const App = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case constant.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, actions.payload],
      };

    case constant.GET_TODOS:
      return {
        ...state,
        todos: actions.payload,
      };

    case constant.LANG_CHANGE:
      return {
        ...state,
        lang: actions.payload,
      };

    default:
      return state;
  }
};

export default App;
