import "../ListSection.css";
import { item } from "../App";

function checkLength(list: string | any[]) {
  if (list.length === 0) {
    return (
      <div className="alert alert-light" role="alert">
        No items found
      </div>
    );
  }
}

interface Props {
  toDoList: item[];
  onDelete: (deletedID: string) => void;
}

function ListSection({ toDoList, onDelete }: Props) {
  return (
    <>
      <div className="alert alert-secondary" role="alert" id="todo">
        To Do List
      </div>
      {checkLength(toDoList)}
      <ul className="list-group">
        {toDoList.map(function (list) {
          return (
            <li className="list-group-item" key={list.id}>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value={list.text}
              />
              <label className="form-check-label" htmlFor={list.id}>
                {list.text}
              </label>
              <button
                type="button"
                className="btn btn-danger"
                id="deleteButton"
                onClick={() => onDelete(list.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListSection;
