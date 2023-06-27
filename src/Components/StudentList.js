import { useState } from "react"
import Base from "../BasePage/Base"
import { AppState } from "../Context/AppProvider"
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"
import { useNavigate } from "react-router-dom"

function StudentList(){
  const navigate = useNavigate()
    const {studentData} = AppState()
  const [currentPage, setPage] = useState(1)
    return (
        <Base>
        <CrumBar/>

        <div className="p-2 m-2 flex">
        <button 
        className="rounded-full bg-base-200 p-3 m-5"
        onClick={()=>navigate("/student/add")}
        >
            Add More Students</button>
        </div>
            {studentData.slice(currentPage*2-2, currentPage*2).map((stud, idx)=>(
                <StudentCard
                student={stud}
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
    [...Array(Math.ceil((studentData.length/2)))].map((_, index)=>(
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
          currentPage < Math.ceil((studentData.length/2)) 
          ? setPage(currentPage+1) : ""}
         className={`join-item btn btn-md `}>next
         </button>  
</div>
        </Base>
    )
}
export default StudentList