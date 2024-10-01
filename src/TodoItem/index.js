import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

export function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <>
      <li>
        <CompleteIcon completed={completed} onComplete={onComplete} />

        <p className={`${completed && "text-completed"}`}>{text}</p>

        <DeleteIcon onDelete={onDelete} />
      </li>
    </>
  );
}
