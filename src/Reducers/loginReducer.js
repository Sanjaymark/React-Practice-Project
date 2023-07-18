import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API/api";


const loginSlice = createSlice({
    name : "loginInfo",
    initialState : {
        data : {
        username : "",
        email:"",
        password: ""
        }
    },
    reducers: {
        loginUser: (state, action) => {
            state.data = action.payload
            loginStudentData(action.payload)
        }, 
        logoutUser : (state, action)=>{
            state.data = {username:"", password:""}
            localStorage.removeItem("token")
        }
    }
})
export const {loginUser, logoutUser} = loginSlice.actions;
export default loginSlice.reducer
async function loginStudentData(payload){
    const res = await fetch(`${API}user/login`, {
        method: "POST",
        body : JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if(data.message){
        console.log(data.message)
        return
      }
      // i'll set it in local storage
      localStorage.setItem("token", data.token)
    }