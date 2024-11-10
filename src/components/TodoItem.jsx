export const TodoItem = ({ id, text, completed, toggleTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <h3>{text}</h3>
      <span onClick={() => deleteTask(id)}>&times;</span>
    </li>
  );
};
