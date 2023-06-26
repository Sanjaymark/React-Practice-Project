import { useState } from "react";
import Base from "../BasePage/Base";
import { API1 } from "../API/api";
import { AppState } from "../Context/AppProvider"


export default function AddStudents() {
    const {studentData, setData} = AppState()

    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");


    //setId(value) => id
    async function addnewStudent()
    {
      const newStudentObj = 
      { 
        name, 
        batch, 
        email, 
        phone,
        qualification
      }
      
      const response = await fetch(API1,
        {
            method : "POST",
            body : JSON.stringify(newStudentObj),
            headers : {
                "Content-Type" : "application/json"
            },
        })

        const data = await response.json();
      
      // adding newdata
      setData([...studentData, data]);
         
      //if we wanted to remove data 
         setName("")
         setBatch("")
         setQualification("")
         setPhone("")
         setEmail("")

    }
    return (
        <Base>
            <div className="p-5">Please Fill the form to add new Student</div>
            <div className="form-control">
                <label className="input-group input-group-md ip m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-md w-96"
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md ip m-2">
                    <span>Batch</span>
                    <input type="text"
                     placeholder="Enter Student Batch" 
                     className="input input-bordered input-md w-96" 
                     value={batch}
                     onChange={(e)=>setBatch(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md ip m-2">
                    <span>Email</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Email" 
                    className="input input-bordered input-md w-96" 
                    value ={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md ip m-2">
                    <span>Phone</span>
                    <input
                     type="text"
                      placeholder="Enter Student Phone"
                       className="input input-bordered input-md w-96" 
                       value={phone}
                       onChange={(e)=>setPhone(e.target.value)}
                       />
                </label>
                <label className="input-group input-group-md ip m-2">
                    <span>Education</span>
                    <input 
                    type="text" 
                    placeholder="Enter Student Education" 
                    className="input input-bordered input-md w-96"
                    value={qualification}
                    onChange={(e)=>setQualification(e.target.value)}
                     />
                </label>

                <button className="rounded-full bn bg-base-200 bn p-2 m-5"
                onClick={addnewStudent}
                >
                    Add Student
                </button>
            </div>
        </Base>
    )
}