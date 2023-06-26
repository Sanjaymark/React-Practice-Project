import { useNavigate } from "react-router-dom";
import { TeacherState } from "../Context/TeacherProvider"
import { API2 } from "../API/api";

export default function TeacherCard({teacher}){
    const {teacherData, setTeacherdata, tcrumState, setTcrumState} = TeacherState()
    const navigate = useNavigate()

    const removeTeacher = async (id)=>{
        //api operations 
      let res = window.confirm("Are your sure?");
      if(res)
      {

        const response = await fetch(`${API2}/${id}`,
        {
            method :"DELETE"
        })

        const data = await response.json()
        console.log(data)
      const newTeacherData = teacherData.filter((teac)=>teac.id !== id);
      setTeacherdata(newTeacherData)
       }
    }

    const handleEdit = (id)=>{
        const newCrum = {
            name : "edit",
            path:  `/edit/teacher/${id}`
        }
        setTcrumState([...tcrumState, newCrum])
        navigate(`/edit/teacher/${id}`)
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl m-2">
        <div className="card-body">
              <h2 className="card-title">{teacher.name}</h2>
              <p>Email: {teacher.email}</p>
              <p>Phone: {teacher.phone}</p>
               <p>Batch: {teacher.batch}</p>
                <p>EDU  : {teacher.qualification}</p>
                <div className="card-actions justify-end">
            
    
            <button className="btn btn-primary"
            onClick={()=>handleEdit(teacher.id)}
            >Edit</button>

            <button className="btn btn-danger bg-error"
                onClick={()=>removeTeacher(teacher.id)}
            >Delete</button>
    
             </div>
           </div>
           </div>
       
        )
}