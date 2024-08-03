import Help from "../assets/Help.png";
import Openion from "../assets/Openion.png";
import Posts from "../assets/Posts.png";
// import Search from "../assets/Search.png";
import Share from "../assets/Share.png";
// import Column from "../components/Column";
import Board from '../components/Board';
import SideBar from "../components/SideBar";
function Dashboard() {


  

  return (
    <>
      <div className="flex h-[100vh]">
        {/* Sidebar */}
        <SideBar/>

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
              {
                data.map((a, index) => {
                  return (
                    <div key={index} className="flex w-[30%] p-4 rounded-md border bg-white">
                      <div className="flex">
                        <img src={a.img} alt="" className="h-[60px] my-auto" />
                      </div>
                      <div className="ml-4 w-[20rem] ">
                        <h3 className="font-semibold">{a.title}</h3>
                        <p className="text-sm">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="h-[65vh] bg-white">
            {/* Board */}
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;


const data = [
  {
    img :Openion,
    title: "Introducing tags",
    description: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
  },
  {
    img :Share,
    title: "Share Notes Instantly",
    description: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
  },
  {
    img :Posts,
    title: "Access Anywhere",
    description: "Sync your notes across all devices. Stay productive whether youre on your phone, tablet, or computer."
  }
  
]