import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../Reducers/loginReducer"

export default function SideBar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return(
    
           <div className="side-bar-styles p-7">
            <div>
              <ul className="actions">
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                    onClick={()=>navigate("/")}
                    >Dashboard</button>
                </li>
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                     onClick={()=>navigate("/profile")}
                     >Profile</button>
                </li>
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                      onClick={()=>navigate("/student/all")}
                    >Student list</button>
                </li>
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                      onClick={()=>navigate("/interview/notes")}
                    >Interview notes</button>
                </li>
                </ul>
            </div>        
            <div className="logout-btn rounded-full hover:bg-sky-700 p-2" >
                    <button
                    onClick={()=>dispatch(logoutUser())}
                    >logout</button>
            </div>
        </div>
    )
}