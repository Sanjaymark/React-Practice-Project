import SideBar from "../Components/SideBar";

export default function Base({children}){
    return (
        <div className="flex flex-col w-full border-opacity-50 h-full " >
            <div className="flex flex-nowrap rounded-box place-items-center h-full ">
                <div className="grid flex-grow h-full w-1/5 card rounded-box place-items-center  m-1 bg-neutral text-neutral-content heights">
                    <SideBar/> 
                </div> 
                <div className=" flex-grow h-full w-4/5 card m-1 bg-neutral text-neutral-content  rounded-box place-items-center heights">
                    {children}
                </div>
            </div>    
      </div>
    )
}