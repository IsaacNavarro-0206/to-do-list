import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

export function TodoCounter() {
  const { todoCompleted, totalTodo } = useContext(TodoContext);

  return (
    <h1>
      {totalTodo === todoCompleted && totalTodo > 0 && todoCompleted > 0
        ? "Todas las tareas finalizadas :D"
        : `Has completado ${todoCompleted} de ${totalTodo} tareas`}
    </h1>
  );
}
