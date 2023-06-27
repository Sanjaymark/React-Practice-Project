
import { useState } from "react";
import Base from "../BasePage/Base";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/loginReducer";
import { signupUser } from "../Reducers/signupReducer";



export default function Dashboard({student}){
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail]= useState("");
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch()
  const userLogin = ()=>{
    const userData = {
        username, 
        password
    }
    console.log(userData)
    dispatch(loginUser(userData))
  }

  const userSignUp = ()=>{
     const signUpData = {
      username,
      password,
      email
     }
     dispatch(signupUser(signUpData));
  }
    return (
        <Base>
        <h1 className="text-lg font-bold p-2 m-2">Welcome to Student App</h1>
        <div className="tabs p-2 m-2 w-full bg-base-100">
         <button className="tab w-1/2 bn" onClick={()=>setTab(1)} > Signup </button> 
        <button className="tab w-1/2 bn" onClick={()=>setTab(2)} > Login</button> 
         </div>

         <div className="form-control" style={{display: tab===2 ? "block": "none"}}>
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
                    placeholder="Enter Password" 
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
       
        <div className="form-control" style={{display: tab===1 ? "block": "none"}}>
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
                    placeholder="Enter Password" 
                    className="input input-bordered input-md w-96"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                     />

                </label>

                <label className="input-group input-group-md bn m-2">
                    <span>Email Add</span>
                    <input 
                    type="email" 
                    placeholder="Enter Student email" 
                    className="input input-bordered input-md w-96"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                     />

                </label>
                 
                <button className=" bg-base-200 bn p-2 m-2"
                onClick={userSignUp}
                >
                   Signup
                </button>

        </div>
       

        </Base>
    )
}