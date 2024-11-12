import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "tasks/fetchTasks",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("No delete task");
      }

      dispatch(deleteTask(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  "tasks/fetchTasks",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().tasks.tasks.find((task) => task.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("No toggle task");
      }
      dispatch(toggleTask());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
    status: null,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "load...";
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "resolve data";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { addNewTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
