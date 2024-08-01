import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Calender from "../assets/Calender.png";
import Close from "../assets/Close.png";
import Loading from "../assets/Loading.png";
import Pencil from "../assets/Pencil.png";
import Priority from "../assets/Priority.png";
import Resize from "../assets/Resize.png";
import Share from "../assets/Shareicon.png";
import Star from "../assets/Star.png";
import { createTask } from "../redux/slices/taskSlice";
// import Status from "../assets/Status.png";
// eslint-disable-next-line react/prop-types
function Drawer({ isOpen, onClose }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    status: "Todo",
    priority: "Low",
    deadline: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission, e.g., send data to server


    if (
      !formData.title ||
      !formData.status ||
      !formData.priority ||
      !formData.deadline ||
      !formData.description
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // calling create account action
    const res = await dispatch(createTask(formData));
    console.log(res)

    // redirect to home page if true
    if (res.payload.success) navigate("/dashboard");

    // clearing the signup inputs
    setFormData({
      title: "",
      status: "Todo",
      priority: "Low",
      deadline: "",
      description: "",
    });


  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 max-w-2/3 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 pb-0 justify-between  flex items-center">
        <div>
          <button className="text-gray-500" onClick={onClose}>
            <img src={Close} alt="" className="w-6 h-6" />
          </button>
          <button className="text-gray-500" onClick={onClose}>
            <img src={Resize} alt="" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex">
          <div className="flex items-center bg-[#F7F7f7] p-1 rounded-sm">
            Share
            <img src={Share} alt="" className="w-5 h-5" />
          </div>
          <div className="flex item-center bg-[#F7F7f7] p-1 rounded-sm ml-4">
            Favorite
            <img src={Star} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <form>
          <div className="mb-4 text-[2.5rem]">
            <input
              type="text"
              id="title"
              className="mt-1 p-2   rounded-md w-full"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center mb-4 h-12">
            <img src={Loading} alt="" className="w-6 h-6" />
            <label
              htmlFor="status"
              className="block text-md font-medium ml-5 text-gray-700 w-[150px]"
            >
              Status
            </label>
            <select
              id="status"
              className="mt-1 p-2  rounded-md appearance-none"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Under Review</option>
              <option>Finished</option>
            </select>
          </div>
          <div className="flex items-center mb-4 h-12">
            <img src={Priority} alt="" className="w-6 h-6" />
            <label
              htmlFor="priority"
              className="block text-md font-medium ml-5 text-gray-700  w-[150px]"
            >
              Priority
            </label>
            <select
              id="priority"
              className="mt-1 p-2  rounded-md appearance-none"
              value={formData.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="flex items-center mb-4 h-12">
            <img src={Calender} alt="" className="w-6 h-6 appearance-none" />
            <label
              htmlFor="deadline"
              className="block text-md font-medium ml-5 text-gray-700  w-[150px]"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="mt-1  p-2  rounded-md"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-4 ">
            <img src={Pencil} alt="" className="w-6 h-6" />
            <label
              htmlFor="description"
              className="block text-md font-medium ml-5 text-gray-700 w-[150px]"
            >
              Description
            </label>
            <input
              id="description"
              className="mt-1 p-2 w-[350px]"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Drawer;
