import { useNavigate } from "react-router-dom";

export default function TeacherCard({teacher, teacherData, setTdata, tcrumState, setTcrumState})
{
    const navigate = useNavigate()
    
    const removeTeacher = (id)=>{
        //api operations 
      let response = window.confirm("Are your sure?");
      if(response){
      const newTeacherData = teacherData.filter((teac)=>teac.id !== id);
      setTdata(newTeacherData)
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