import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { createAccount } from "../redux/slices/authSlice";
function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // function to set the signup data
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

    // function to create account
  const createNewAccount = async (event) => {
    event.preventDefault();

    // checking the empty fields
    if (
      !signupData.email ||
      !signupData.fullName ||
      !signupData.password
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // checking the name field length
    if (signupData.fullName.length < 5) {
      toast.error("Name should be atleast of 5 characters");
      return;
    }

    // email validation using regex
    if (
      !signupData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid email id");
      return;
    }

    // password validation using regex
    if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
      toast.error(
        "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
      );
      return;
    }

    // // creating the form data from the existing data
    // const formData = new FormData();
    // formData.append("fullName", signupData.fullName);
    // formData.append("email", signupData.email);
    // formData.append("password", signupData.password);

    // // calling create account action
    // console.log(formData)
    const res = await dispatch(createAccount(signupData));
    console.log(res)
    // redirect to login page if true
    if (res.payload.success) navigate("/signin");

    // clearing the signup inputs
    setSignupData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center h-[100vh] bg-gradient-to-t from-[#AFA3FF] to-white">
        <form
          onSubmit={createNewAccount}
          className="flex flex-col  justify-center gap-3 rounded-lg p-16 bg-white w-[40rem] h-[25rem] mt-[8rem]"
        >
          <h1 className="text-center text-5xl font-bold">Welcome to <span className="text-[#4534AC]">Workflo!</span></h1>

          {/* input for name */}
          <div className="flex flex-col gap-1">
            <input
              required
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border"
              value={signupData.fullName}
              onChange={handleUserInput}
            />
          </div>

          {/* input for email */}
          <div className="flex flex-col gap-1">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border"
              value={signupData.email}
              onChange={handleUserInput}
            />
          </div>

          {/* input for password */}
          <div className="flex flex-col gap-1">

            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-transparent px-2 py-1 border"
              value={signupData.password}
              onChange={handleUserInput}
            />
          </div>

          {/* registration button */}
          <button
            className="w-full bg-[#4B36CC] transition-all ease-in-out duration-300 rounded-lg py-2 font-semibold text-lg text-white cursor-pointer"
            type="submit"
          >
            Sign up
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/signin"} className="link text-accent cursor-pointer">
              <span className="text-blue-600">Signin</span>
            </Link>
          </p>
        </form>
      </div>
  )
}

export default SignUp;