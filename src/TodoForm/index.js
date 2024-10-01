import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

export function TodoForm({ setOpenModal }) {
  const { addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>

      <textarea
        required
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={(event) => setNewTodoValue(event.target.value)}
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button cancel-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button add-button">
          Añadir
        </button>
      </div>
    </form>
  );
}
