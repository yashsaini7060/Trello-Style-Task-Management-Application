import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/slices/authSlice";
function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 async function onLogout(e){
 
    e.preventDefault();
    await dispatch(logout());
    navigate('/')
 }
  return (
    <>
    <div>Dashboard</div>
    <button onClick={onLogout}>Logout</button>
    </>
  )
}

export default Dashboard