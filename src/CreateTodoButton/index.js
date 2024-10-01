import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  return <button className="button-open-modal" onClick={() => setOpenModal((state) => !state)}>+</button>;
}
