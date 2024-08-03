/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import Clock from "../assets/Clock.png";
import {setDraggingTask} from '../redux/slices/taskSlice'; 
function Card({id, title, priority,deadline, description}) {

  const dispatch = useDispatch();


  const handleDragStart = (id) => {
    dispatch(setDraggingTask(id));
    console.log(id)
  };

  //Priority Color
  const getPriorityColor = () => {
    switch (priority) {
      case "Urgent":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };




  return (
    <div className="flex-col w-full my-4 bg-[#F7F7F7] p-4 rounded-lg cursor-move" draggable="true" onDragStart={ () => handleDragStart(id)} onDragEnd={() => handleDragStart("")}>
      <h3 className="text-[1.2rem] font-semibold">{title}</h3>
      <p className="text-[1rem] mt-3">{description}</p>
      <p className={`text-sm ${getPriorityColor()} w-fit p-1 text-white font-semibold rounded-md mt-2`}>{priority}</p>
      <div className="flex mt-2 justify-centers items-center">
        <img src={Clock} alt="" className="w-auto h-[1rem]"/>  
        <p className="ml-1 text-[] font-semibold">{deadline}</p>
      </div>

      <p className="text-sm mt-2">1hr ago</p>
    </div>
  )
}

export default Card
