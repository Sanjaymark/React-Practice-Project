import { createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../API/api";


const signupSlice = createSlice({
name : "signupInfo",
initialState : {
    data: {
        username: "",
        email:"",
        password: "",
    }
}, 
reducers : {
    signupUser : (state, action)=> {
        console.log(action.payload)
        state.data = action.payload
        postStudentData(action.payload)
    }
}
}); 

export const {signupUser} = signupSlice.actions; 
export default signupSlice.reducer

async function postStudentData(payload){
    const res = await fetch(UserAPI, {
        method: "POST",
        body : JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      localStorage.setItem("username", data.username)
}