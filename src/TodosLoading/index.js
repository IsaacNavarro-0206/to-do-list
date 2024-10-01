import "./TodosLoading.css";

export function TodosLoading() {
  return (
    <>
      <li className="li-todos-loading">
        <div className="start-circle skeleton-button"></div>

        <div className="end-circle skeleton-button"></div>
      </li>
    </>
  );
}
