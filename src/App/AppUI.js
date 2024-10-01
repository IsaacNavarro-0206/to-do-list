import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export function AppUI() {
  const {
    loading,
    error,
    todosSearched,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="container">
      <TodoCounter />

      <TodoSearch />

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      )}

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}

        {!loading && todosSearched.length === 0 && <EmptyTodos />}

        {todosSearched.map((todo) => (
          <TodoItem
            onComplete={() => completeTodo(todo.completed, todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}
