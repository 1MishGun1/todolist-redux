import Styles from "./App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";

function App() {
  //   const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const deleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id !== id) return task;
    //     return {
    //       ...task,
    //       completed: !task.completed,
    //     };
    //   })
    // );
  };

  return (
    <div className={Styles.App}>
      <InputField text={text} setText={setText} addNewTask={addNewTask} />
      <TodoList toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
