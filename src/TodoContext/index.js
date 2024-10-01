import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    saveItem: saveTodo,
    item: todos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const todoCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodo = todos.length;

  const todosSearched = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (completed, text) => {
    if (completed) return;

    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = true;
      }

      return todo;
    });

    saveTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);

    saveTodo(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });

    saveTodo(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completeTodo,
        deleteTodo,
        todoCompleted,
        todosSearched,
        totalTodo,
        setSearchValue,
        searchValue,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
