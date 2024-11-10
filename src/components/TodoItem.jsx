import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/taskSlice";

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask({ id })}
      />
      <h3>{text}</h3>
      <span onClick={() => dispatch(deleteTask({ id }))}>&times;</span>
    </li>
  );
};
