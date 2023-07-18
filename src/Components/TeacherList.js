import { useState } from "react"
import Base from "../BasePage/Base"
import { AppState2 } from "../Context/AppProvider2";
import TcrumBar from "./Tcrumbar";
import TeacherCard from "./TeacherCard"
import { useNavigate } from "react-router-dom"

function TeacherList(){
  const navigate = useNavigate()
    const {teacherData} = AppState2()
  const [currentPage, setPage] = useState(1)
    return (
        <Base>
        <TcrumBar/>

        <div className="p-2 m-2 flex">
        <button 
        className="rounded-full bg-base-200 bn p-3 m-5"
        onClick={()=>navigate("/teacher/add")}
        >
            Add Teachers</button>
        </div>
            {teacherData.slice(currentPage*2-2, currentPage*2).map((teac, idx)=>(
                <TeacherCard
                teacher={teac}
                key={idx}
                />
            ))}
            
<div className="join">
<button
         onClick={()=>
          currentPage >1 ? setPage(currentPage-1) : ""
        }
         className={`join-item btn btn-md `}>prev
         </button>  
  {
    [...Array(Math.ceil((teacherData.length/2)))].map((_, index)=>(
        <button
         onClick={()=>setPage(index+1)}
         className={currentPage ===(index+1) ? 
         "join-item btn btn-md btn-active" 
         : 
         "join-item btn btn-md" }>{index+1}
         </button>     
    ))
  }
<button
         onClick={()=>
          currentPage < Math.ceil((teacherData.length/2)) 
          ? setPage(currentPage+1) : ""}
         className={`join-item btn btn-md `}>next
         </button>  
</div>
        </Base>
    )
}
export default TeacherList