import Styles from "./App.css";
import { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, fetchTasks } from "./store/taskSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.tasks);

  const addTask = () => {
    dispatch(addNewTask({ text }));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={Styles.App}>
      <InputField text={text} setText={setText} handleSubmit={addTask} />

      {status === "load..." && <h2>Loading data</h2>}
      {error === <h2>Error: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
