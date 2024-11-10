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

      state.tasks.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    toggleTask(state, action) {
      const toggledTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      toggledTask.completed = !toggledTask.completed;
    },
  },
});

export const { addNewTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
