import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addNewTask(state, action) {
      console.log(state);
      console.log(action);

      state.tasks.push([
        {
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        },
      ]);
    },
    deleteTask(state, action) {},
    toggleTask(state, action) {},
  },
});

export const { addNewTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
