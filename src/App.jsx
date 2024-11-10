import Styles from "./App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";
import { useDispatch } from "react-redux";
import { addNewTask } from "./store/taskSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTask({ text }));
    setText("");
  };

  return (
    <div className={Styles.App}>
      <InputField text={text} setText={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
