import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/taskSlice";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask({ id })}
      />
      <h3>{title}</h3>
      <span onClick={() => dispatch(deleteTask({ id }))}>&times;</span>
    </li>
  );
};
