import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import CrumBar from "./CrumBar";
import { AppState } from "../Context/AppProvider";
import { API } from "../API/api";
import { useFormik } from "formik";
import { studentSchema } from "../Schema/schema";


export default function EditStudent() 
{

   
    const {studentData, setData} = AppState()
    const navigate = useNavigate()

    const { id } = useParams();

    // Form validation logics 

   const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik(
    {
      initialValues : 
      {
        name : "",
        batch : "",
        email : "",
        phone : "",
        qualification: "",
      },
        validationSchema : studentSchema,
        onSubmit : (editedStudent) => 
        {
            console.log(editedStudent)
            editStudent(editedStudent)
        }
   })


    useEffect(() => {
        console.log("id : ", id)
        const selectedStudent = studentData.find((stud, index) => stud.id === id);
        console.log(selectedStudent)

        values.name=(selectedStudent.name)
        values.batch=(selectedStudent.batch)
        values.qualification=(selectedStudent.qualification)
        values.phone=(selectedStudent.phone)
        values.email=(selectedStudent.email)
    }, [])

   async function editStudent(editedStudent) {

        // api handlers 
        const response = await fetch(`${API}/${id}`, {
            method:"PUT",
            body: JSON.stringify(editedStudent),
            headers:{
                "Content-Type":"application/json"
            },
        })
      const data = await response.json();
      console.log("data----", data)
      console.log("editObj", editedStudent)
        // we need to find the index
        const editIndex = studentData.findIndex((stud, index) => stud.id === id);
        console.log(editIndex)
        studentData[editIndex] = data
        setData([...studentData]);
        navigate("/student/all")
    }

    return (
        <Base>
    <CrumBar/>
            <div className="p-5">Edit Student</div>
            <div className="form-control">
            <form onSubmit={handleSubmit}>
                <label className="input-group input-group-md bn m-2">
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        className="input input-bordered input-md w-96"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="name"
                    />
                </label>

                {touched.name && errors.name ?
                    <div className="text-red-300">
                        {errors.name}
                    </div> : ""
                }

                <label className="input-group input-group-md bn m-2">
                    <span>Batch</span>
                    <input type="text"
                        placeholder="Enter Student Batch"
                        className="input input-bordered input-md w-96"
                        value={values.batch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="batch"
                    />
                </label>

                {touched.batch && errors.batch ?
                    <div className="text-red-300">
                        {errors.batch}
                    </div> : ""
                }

                <label className="input-group input-group-md bn m-2">
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="Enter Student Email"
                        className="input input-bordered input-md w-96"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                    />
                </label>

                {touched.email && errors.email ?
                    <div className="text-red-300">
                        {errors.email}
                    </div> : ""
                }


                <label className="input-group input-group-md bn m-2">
                    <span>Phone</span>
                    <input
                        type="text"
                        placeholder="Enter Student Phone"
                        className="input input-bordered input-md w-96"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phone"
                    />
                </label>

                {touched.phone && errors.phone ?
                    <div className="text-red-300">
                        {errors.phone}
                    </div> : ""
                }

                <label className="input-group input-group-md bn m-2">
                    <span>Education</span>
                    <input
                        type="text"
                        placeholder="Enter Student Education"
                        className="input input-bordered input-md w-96"
                        value={values.qualification}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="qualification"
                    />
                </label>

                {touched.qualification && errors.qualification ?
                    <div className="text-red-300">
                        {errors.qualification}
                    </div> : ""
                }

                <button className="rounded-full bg-base-200 p-2 bn m-5"
                    type="submit"
                >
                    Edit Student
                </button>
            </form>
            </div>
        </Base>
    )
}