const transition = {
  en: {
    title: "My Todo App",
    button: "Add",
    delete: "Delete Toto",
    newTodo: "New Todo Add...",
  },
  tr: {
    title: "Yapılacaklar Listem",
    button: "Ekle",
    delete: "Todo' yu Sil",
    newTodo: "Yeni Todo Ekle...",
  },
};

export const getChangeTitle = (language) => transition[language].title;
export const getChangeButton = (language) => transition[language].button;
export const getChangeDelete = (language) => transition[language].delete;
export const getChangeTodo = (language) => transition[language].newTodo;
