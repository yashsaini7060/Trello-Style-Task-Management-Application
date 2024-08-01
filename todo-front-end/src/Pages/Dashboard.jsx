import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import AddBtn from "../assets/AddBtn.png";
import Analytics from "../assets/Analytics.png";
import Arrow from "../assets/Arrow.png";
// import Automation from "../assets/Automation.png";
import Boards from "../assets/Boards.png";
// import Calender from "../assets/Calender.png";
// import Filter from "../assets/Filter.png";
import Help from "../assets/Help.png";
import Home from "../assets/Home.png";
import Loading from "../assets/Loading.png";
import Notification from "../assets/Notification.png";
import Openion from "../assets/Openion.png";
import Posts from "../assets/Posts.png";
import Profile from "../assets/profile.png";
// import Search from "../assets/Search.png";
import Settings from "../assets/Settings.png";
import Share from "../assets/Share.png";
import Teams from "../assets/teams.png";
import Column from "../components/Column";
import Drawer from "../components/Drawer";
import { logout } from "../redux/slices/authSlice";
import { getAllTasks } from '../redux/slices/taskSlice';
function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cards, setCards]= useState([]);
  async function onLogout(e) {
    e.preventDefault();
    await dispatch(logout());
    navigate("/");
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  
  const getTasks= async () => {
    const res = await dispatch(getAllTasks());
    setCards(res?.payload?.data?.tasks)
  }

  useEffect(() => {
      getTasks();
  },[])


  return (
    <>
      <div className="flex h-[100vh]">
        {/* Sidebar */}
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
          
        </div>

        {/* Main Content */}
        <div className="w-full h-[100vh] bg-[#F7F7F7] p-4">
          <div className="">
            {/* Greetings */}
            <div className="flex items-centers justify-between">
              <div>
                <h1 className="text-[3rem] font-bold">Good morning, Yash!</h1>
              </div>
              <div className="flex text-center items-center w-[15rem]">
                <p className="font-semibold">Help & Feedback </p>
                <img src={Help} alt="" className="w-6 h-6 ml-2" />
              </div>
            </div>

            {/*About product */}
            <div className="flex items-centers justify-between mt-4">
              <div className="flex w-[30%] p-4 rounded-md border bg-white">
                <div className="flex">
                  <img src={Openion} alt="" className="h-[60px] my-auto" />
                </div>
                <div className="ml-4 w-[20rem] ">
                  <h3 className="font-semibold">Introducing tags</h3>
                  <p className="text-sm">
                    Easily categorize and find your notes by adding tags. Keep
                    your workspace clutter-free and efficient.
                  </p>
                </div>
              </div>
              <div className="flex w-[30%] p-4 rounded-md border bg-white">
                <div className="flex">
                  <img src={Share} alt="" className="h-[60px] my-auto" />
                </div>
                <div className="ml-4 w-[20rem] ">
                  <h3 className="font-semibold">Share Notes Instantly</h3>
                  <p className="text-sm">
                    Effortlessly share your notes with others via email or link.
                    Enhance collaboration with quick sharing options.
                  </p>
                </div>
              </div>
              <div className="flex w-[30%] p-4 rounded-md border bg-white">
                <div className="flex">
                  <img src={Posts} alt="" className="h-[60px] my-auto" />
                </div>
                <div className="ml-4 w-[20rem] ">
                  <h3 className="font-semibold">Access Anywhere</h3>
                  <p className="text-sm">
                    Sync your notes across all devices. Stay productive whether
                    youre on your phone, tablet, or computer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[65vh] bg-white">
            {/* coulms */}
            <div className="flex bg-white p-4 mt-4 justify-between">
              <Column
                title="Todo"
                cards={cards}
                // cards={}
                // setCards={setCards}
              />
              <Column title="In Progress" cards={cards} />

              <Column title="Under Review"  cards={cards} />
              <Column title="Finished"   cards={cards}/>
            </div>
          </div>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
}

export default Dashboard;
