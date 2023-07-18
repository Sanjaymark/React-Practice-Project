import { useNavigate } from "react-router-dom";
import { AppState2 } from "../Context/AppProvider2";
import { API2 } from "../API/api";

export default function TeacherCard({teacher}){
    const {teacherData, setData, tcrumState, setTcrumState} = AppState2()
    const navigate = useNavigate()

    const removeTeacher = async (id)=>{
      let res = window.confirm("Are your sure?");
      if(res){
         // api delete operation
        const response = await fetch(`${API2}/${id}`, {
            method :"DELETE"
        });
        const data = await response.json();
        console.log(data)
        const newTeacherData = teacherData.filter((teac)=>teac.id !== id);
        setData(newTeacherData)
       }
    }

    const handleEdit = (id)=>{
        const newTcrum = {
            name : "edit",
            path:  `/edit/teacher/${id}`
        }
        setTcrumState([...tcrumState, newTcrum])
        navigate(`/edit/teacher/${id}`)
    }


    return (

    <div className="card w-96 bg-base-100 shadow-xl m-2">
    <div className="card-body">
          <h2 className="card-title">{teacher.name}</h2>
           <p>Batch: {teacher.batch}</p>
            <p>Email: {teacher.email}</p>
            <p>Phone: {teacher.phone}</p>
            <p>EDU  : {teacher.qualification}</p>
            <div className="card-actions justify-end">
        <button className="btn btn-danger"
        onClick={()=>removeTeacher(teacher.id)}
        >Delete</button>

     <button className="btn btn-primary"
        onClick={()=>handleEdit(teacher.id)}
        >Edit</button>
         </div>
       </div>
       </div>
   
    )

}

 