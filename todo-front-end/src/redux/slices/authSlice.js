import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from '../../config/axiosInstance';

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  data: localStorage.getItem("data") || {}
}


export const createAccount = createAsyncThunk("/auth/signup" , async(data) => {

  try {
    const response = axiosInstance.post("user/register", data);
    toast.promise(response, {
      loading: 'Wait creating your account',
      success: (data) =>{
        return data?.data?.message
      },
      error: 'Failed to create your account'
    })
    return await response;
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

// function to handle login
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let res = axiosInstance.post("/user/login", data);

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log in",
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});


// function to handle logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    let res = axiosInstance.post("/user/logout");

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log out",
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action)


      localStorage.setItem("data", JSON.stringify(action?.payload?.data));
      localStorage.setItem("isLoggedIn", true);
      state.isLoggedIn = true;
      state.data = action.payload;
    })
  }
})

export default authSlice.reducer;