import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from '../../config/axiosInstance';

const initialState = {
  taskList: localStorage.getItem("tasks") || []
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



const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllTasks.fulfilled, (state, action) => {
      localStorage.setItem("tasks", JSON.stringify(action?.payload?.data?.tasks));
      state.tasks = action.payload?.payload?.data?.tasks;
    })
    // .addCase(createTask.fulfilled, (state, action) => {
    //   console.log(action)


    //   localStorage.setItem("tasks", JSON.stringify(action?.payload?.data));
    //   state.tasks = action.payload;
    // })
    
  }
})

export default taskSlice.reducer;