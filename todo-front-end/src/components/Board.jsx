import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTasks, updateTaskStatus } from "../redux/slices/taskSlice";
import Column from "./Column";

function Board() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);
  const draggingCardId = useSelector((state) => state.task.draggingTaskId)
  const token = useSelector((state) => state.auth.token)

  async function loadTasks() {
    await dispatch(getAllTasks())
  }


  async function updateTask(id, status){
    
    if (id) {
      const payload ={
        taskId: id,
        data: {
          status: status
        }
      }
      await dispatch(updateTaskStatus(payload));
      await dispatch(getAllTasks())
    }
  }

  const onDrop = async (column, index) => {
    if(!draggingCardId) return
    await updateTask(draggingCardId, column)
  }


  useEffect(() => {
    loadTasks()
  }, []);  

  return (
    <div className="flex bg-white p-4 mt-4 justify-between">
      {["Todo", "In Progress", "Under Review", "Finished"].map(
        (status, index) => (
          <Column
            key={index}
            title={status}
            cards={taskList.filter((task) => task.status === status)}
            onDrop={onDrop}
          />
        )
      )}
    </div>
  );
}

export default Board;
