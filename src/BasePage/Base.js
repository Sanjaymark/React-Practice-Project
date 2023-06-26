import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

export default function Base({children}){
    return (
        <div className="flex flex-col w-full border-opacity-50 h-screen " >
        <div className="grid h-20 card  rounded-box place-items-center m-1">
           <TopBar/>
        </div>
        {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> */}

        <div className="flex flex-nowrap rounded-box place-items-center h-screen ">
  <div className="grid flex-grow h-full w-1/5 card rounded-box place-items-center  m-1 bg-neutral text-neutral-content">
      <SideBar/> 
    </div> 
  <div className=" flex-grow h-full w-4/5 card m-1 bg-neutral text-neutral-content  rounded-box place-items-center">
      {children}
  </div>
  </div>    
      </div>
    )
}