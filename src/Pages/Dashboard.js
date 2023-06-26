
import { useState } from "react";
import Base from "../BasePage/Base";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/loginReducer";



export default function Dashboard({student}){
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const userLogin = ()=>{
    const userData = {
        username, 
        password
    }
    console.log(userData)
    dispatch(loginUser(userData))
  }
    return (
        <Base>
        <h1 className="text-lg font-bold p-2 m-2">Welcome to Student App</h1>
        <div className="tabs p-2 m-2 w-full bg-base-100">
         <a className="tab w-1/2 bn"> Signup </a> 
        <a className="tab w-1/2 bn">Login</a> 
        <div className="login-form p-2 m-2 w-full">
                <label className="input-group input-group-md bn m-2">
                    <span>Username</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-md w-96"
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}

                     />

                </label>

                <label className="input-group input-group-md bn m-2">
                    <span>Password</span>
                    <input 
                    type="password" 
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-md w-96"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                     />

                </label>
                 
                <button className=" bg-base-200 bn p-2 m-2"
                onClick={userLogin}
                >
                   Login
                </button>


        </div>
         </div>
       

        </Base>
    )
}