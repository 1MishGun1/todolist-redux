import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ toggleTask, deleteTask }) => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          {...task}
        />
      ))}
    </ul>
  );
};
