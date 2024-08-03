import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from '../../config/axiosInstance';

const initialState = {
  taskList: localStorage.getItem("tasks") || [],
  draggingTaskId: localStorage.getItem("taskId") || "",
}


export const getAllTasks = createAsyncThunk("/task/getAllTask", async() => {
  try {
    const response = axiosInstance.get("tasks");
    toast.promise(response, {
      loading: 'Wait fetching your tasks',
      success: (data) =>{

        return data?.data?.message
      },
      error: 'Failed to fetch your tasks'
    })
    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})


export const createTask = createAsyncThunk("/auth/createTask" , async(data) => {

  try {
    console.log(data)
    const response = axiosInstance.post("tasks", data);
    toast.promise(response, {
      loading: 'Wait creating your task',
      success: (data) =>{
        return data?.data?.message
      },
      error: 'Failed to create your task'
    })
    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})



// Thunk to update task status
export const updateTaskStatus = createAsyncThunk("/task/updateTaskStatus", async ({ taskId, status }) => {
  try {
    const response = axiosInstance.patch(`tasks/${taskId}`, { status });
    toast.promise(response, {
      loading: 'Updating task status...',
      success: (data) => data?.data?.message,
      error: 'Failed to update task status'
    });
    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setDraggingTask: (state, action) => {
      state.draggingTaskId = action.payload;
      localStorage.setItem("taskId", action.payload);
    },
    dropTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status = newStatus;
      }
      state.draggingTaskId = null;
    },

  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllTasks.fulfilled, (state, action) => {
      console.log(action?.payload?.data?.tasks)
      localStorage.setItem("tasks", JSON.stringify(action?.payload?.data?.tasks));
      state.tasks = action.payload?.payload?.data?.tasks;
    })
    
  }
})
export const { setDraggingTask, dropTask } = taskSlice.actions;
export default taskSlice.reducer;