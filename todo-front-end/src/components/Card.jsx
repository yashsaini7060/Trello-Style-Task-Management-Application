import Clock from "../assets/Clock.png"
function Card({title, description, priority, dueDate,}) {
  return (
    <div className="flex-col w-full my-4 bg-[#F7F7F7] p-4 rounded-lg" draggable>
      <h3 className="text-[1.2rem] font-semibold">Implement User Authentication</h3>
      <p className="text-[1rem] mt-3">Develop and integrate user authentication using email and password.</p>
      <p className="text-sm bg-[#FF6B6B] w-fit p-1 text-white font-semibold rounded-md mt-2">Urgent</p>
      <div className="flex mt-2 justify-centers items-center">
        <img src={Clock} alt="" className="w-auto h-[1rem]"/>  
        <p className="ml-1 text-[] font-semibold">2024-08-15</p>
      </div>

      <p className="text-sm mt-2">1hr ago</p>
    </div>
  )
}

export default Card


// function Card() {
//   return (
//     <>
//       {/* <DropIndicator beforeId={id} column={column} /> */}
//       <motion.div
//         layout
//         layoutId={id}
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, { title, id, column })}
//         className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
//       >
//         <p className="text-sm text-neutral-100">{title}</p>
//       </motion.div>
//     </>
//   )
// }

// export default Card


// const Card = ({ title, id, column, handleDragStart }) => {
//   return (
//     <>
//       <DropIndicator beforeId={id} column={column} />
//       <motion.div
//         layout
//         layoutId={id}
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, { title, id, column })}
//         className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
//       >
//         <p className="text-sm text-neutral-100">{title}</p>
//       </motion.div>
//     </>
//   );
// };