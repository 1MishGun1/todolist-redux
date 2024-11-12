import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/taskSlice";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleStatus({ id })}
      />
      <h3>{title}</h3>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};
