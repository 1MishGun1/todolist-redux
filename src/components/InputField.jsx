export const InputField = ({ text, setText, addNewTask }) => {
  return (
    <>
      <label htmlFor="addTask">New task</label>
      <input
        type={text}
        name="addTask"
        id="addTask"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addNewTask}>Add New Task</button>
    </>
  );
};
