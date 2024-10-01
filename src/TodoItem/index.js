import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

export function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <>
      <li className="TodoItem">
        <CompleteIcon completed={completed} onComplete={onComplete} />

        <p className={`${completed && "TodoItem-p--complete"} TodoItem-p`}>
          {text}
        </p>

        <DeleteIcon onDelete={onDelete} />
      </li>
    </>
  );
}
