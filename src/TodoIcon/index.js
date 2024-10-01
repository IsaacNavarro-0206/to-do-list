import { ReactComponent as CheckSvg } from "../svg/check.svg";
import { ReactComponent as DeleteSvg } from "../svg/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSvg className="icon-svg" fill={color} />,
  delete: (color) => <DeleteSvg className="icon-svg" fill={color} />,
};

export function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`icon icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}
