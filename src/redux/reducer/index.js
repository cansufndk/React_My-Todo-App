import * as constant from "../constant";

const INITIAL_STATE = {
  todos: [],
  lang: "tr",
  todo: {},
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

    case constant.DETAILS_TODO:
      return {
        ...state,
        todo: actions.payload,
      };

    default:
      return state;
  }
};

export default App;
