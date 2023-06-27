import { useSelector } from "react-redux";
import Base from "../BasePage/Base";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Profile(){
    const navigate = useNavigate();
    
    useEffect(()=>{
       if (!localStorage.getItem("username")){
           navigate("/",{replace:true});
       }
    }, [navigate]); 

    const {username, email} = (useSelector((state)=>state.signupInfo.data))

    return (
        <Base>
           <div className="artboard p-2 mt-24 w-96 bg-base-300">
           {username && (
            <>
            <div className="text-bold">Profile Info</div>
               <p>Name : {username}</p>
               <p>Email: {email}</p>
             </>
            )}
           </div>
  

        </Base>
    )
}