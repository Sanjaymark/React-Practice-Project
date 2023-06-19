import Base from "../BasePage/Base";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate()
    return (
        <Base>
        <h1 className="">Dashboard</h1>

        <button 
        className="rounded-full bg-accent userbutton p-3 m-5"
        onClick={()=>navigate("/student/add")}
        > Create Student
        </button>
        
        <button 
        className="rounded-full bg-accent userbutton p-3 m-5"
        onClick={()=>navigate("/teacher/add")}
        > Create Teacher
        </button>

        </Base>
    )
}