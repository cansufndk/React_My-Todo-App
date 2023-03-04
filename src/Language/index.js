const transition = {
  en: {
    title: "My Todo App",
    button: "Add",
  },
  tr: {
    title: "Yapılacaklarım",
    button: "Ekle",
  },
};

export const getChangeTitle = (language) => transition[language].title;
export const getChangeButton = (language) => transition[language].button;
