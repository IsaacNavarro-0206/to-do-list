import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
}
