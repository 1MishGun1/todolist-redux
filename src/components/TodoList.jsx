import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  // console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  );
};
