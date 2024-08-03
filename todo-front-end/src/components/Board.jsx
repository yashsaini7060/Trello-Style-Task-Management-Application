import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";

import { getAllTasks } from '../redux/slices/taskSlice';
import Column from "./Column";

function Board() {
  const dispatch = useDispatch();

  const [cards, setCards]= useState([]);

    const getTasks= async () => {
      const res = await dispatch(getAllTasks());
      setCards(res?.payload?.data?.tasks) 
    }

    const onDrop = (column, index) => {
      console.log(column, index)
    }

  useEffect(() => {
      getTasks();
  },[])

  return (
    <div className="flex bg-white p-4 mt-4 justify-between">
    {['Todo', 'In Progress', 'Under Review', 'Finished'].map((status, index) => (
      <Column key={index} title={status} cards={cards.filter(card => card.status === status)} onDrop={onDrop} />
    ))}
      
    </div>
  );
}

export default Board;