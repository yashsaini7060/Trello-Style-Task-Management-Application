import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Analytics from "../assets/Analytics.png";
import Arrow from "../assets/Arrow.png";
import Boards from "../assets/Boards.png";
import Home from "../assets/Home.png";
import Loading from "../assets/Loading.png";
import Notification from "../assets/Notification.png";
import Profile from "../assets/profile.png";
import Settings from "../assets/Settings.png";
import Teams from "../assets/teams.png";
import Drawer from "../components/Drawer";
import { logout } from "../redux/slices/authSlice";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onLogout(e) {
    e.preventDefault();
    await dispatch(logout());
    navigate("/");
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="w-[15rem] p-4 border">
      <div className="flex">
        <div className="w-8 flex">
          <img src={Profile} alt="profile" className="flex w-8 " />
        </div>
        <h5 className="text-xl ml-2 font-semibold">{"Yash Kumar"}</h5>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <img src={Notification} alt="" className="w-6 h-6" />
          <img src={Loading} alt="" className="w-6 h-6 ml-2" />
          <img src={Arrow} alt="" className="w-6 h-6 ml-2" />
        </div>
        <button onClick={onLogout} className="p-2 bg-[#F4F4F4] rounded-md">
          Logout
        </button>
      </div>
      <div className="flex items-center text-center mt-4 text-[#797979]">
        <img src={Home} alt="profile" className="w-6" />
        <h5 className="text-md ml-2 font-medium">Home</h5>
      </div>
      <div className="flex items-center text-center mt-4 text-[#797979]">
        <img src={Boards} alt="profile" className="w-6" />
        <h5 className="text-md ml-2 font-medium">Boards</h5>
      </div>
      <div className="flex items-center text-center mt-4 text-[#797979]">
        <img src={Settings} alt="profile" className="w-6" />
        <h5 className="text-md ml-2 font-medium">Settings</h5>
      </div>
      <div className="flex items-center text-center mt-4 text-[#797979]">
        <img src={Teams} alt="profile" className="w-6" />
        <h5 className="text-md ml-2 font-medium">Teams</h5>
      </div>
      <div className="flex items-center text-center mt-4 text-[#797979]">
        <img src={Analytics} alt="profile" className="w-6" />
        <h5 className="text-md ml-2 font-medium">Analytics</h5>
      </div>
      <button
        onClick={toggleDrawer}
        className=" w-[100%] mt-4 text-white py-2 bg-[#4B36CC] rounded-md "
      >
        Create New task
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}

export default SideBar;
