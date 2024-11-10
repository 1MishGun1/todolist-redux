export const InputField = ({ text, setText, handleSubmit }) => {
  return (
    <>
      <label htmlFor="addTask">New task</label>
      <input
        type={text}
        name="addTask"
        id="addTask"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add New Task</button>
    </>
  );
};
