/* eslint-disable react/prop-types */


import Clock from "../assets/Clock.png"
function Card({title, priority,deadline, description}) {
  return (
    <div className="flex-col w-full my-4 bg-[#F7F7F7] p-4 rounded-lg" draggable>
      <h3 className="text-[1.2rem] font-semibold">{title}</h3>
      <p className="text-[1rem] mt-3">{description}</p>
      <p className="text-sm bg-[#FF6B6B] w-fit p-1 text-white font-semibold rounded-md mt-2">{priority}</p>
      <div className="flex mt-2 justify-centers items-center">
        <img src={Clock} alt="" className="w-auto h-[1rem]"/>  
        <p className="ml-1 text-[] font-semibold">{deadline}</p>
      </div>

      <p className="text-sm mt-2">1hr ago</p>
    </div>
  )
}

export default Card
