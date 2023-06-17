import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import TcrumBar from "./Tcrumbar";

export default function EditProfile({ teacherData, setTdata, tcrumState, setTcrumState }) {

    const navigate = useNavigate()

    const { id } = useParams();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [qualification, setQualification] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        console.log("id : ", id)
        const selectedTeacher = teacherData.find((stud, index) => stud.id === parseInt(id));
        console.log(selectedTeacher)
        setIdx(selectedTeacher.id)
        setName(selectedTeacher.name)
        setBatch(selectedTeacher.batch)
        setQualification(selectedTeacher.qualification)
        setPhone(selectedTeacher.phone)
        setEmail(selectedTeacher.email)
    }, [id,teacherData])

    function editTeacher() {
        const editedTeacherObject = {
            id: idx,
            name,
            batch,
            email,
            phone,
            qualification
        }
        console.log(editedTeacherObject)
        // we need to find the index
        const editIndex = teacherData.findIndex((stud, index) => stud.id === parseInt(id));
        console.log(editIndex)
        teacherData[editIndex] = editedTeacherObject
        setTdata([...teacherData]);
        navigate("/student/all")
    }

    return (
        <Base>
        <TcrumBar 
         tcrumState ={tcrumState}
         setTcrumState ={setTcrumState}
        />
            <div className="p-5 ediv ">Please Fill the form to add Edit Student</div>
            <div className="form-control">
                <label className="input-group input-group-md inp m-2">
                    <span>ID </span>
                    <input
                        type="number"
                        placeholder="Enter Student ID"
                        className="input input-bordered input-md w-96"
                        value={idx}
                        onChange={(e) => setIdx(e.target.value)}
                    />
                </label>

                <label className="input-group input-group-md inp m-2">
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        className="input input-bordered input-md w-96"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md inp m-2">
                    <span>Batch</span>
                    <input type="text"
                        placeholder="Enter Student Batch"
                        className="input input-bordered input-md w-96"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md inp m-2">
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="Enter Student Email"
                        className="input input-bordered input-md w-96"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md inp m-2">
                    <span>Phone</span>
                    <input
                        type="text"
                        placeholder="Enter Student Phone"
                        className="input input-bordered input-md w-96"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md inp m-2">
                    <span>Education</span>
                    <input
                        type="text"
                        placeholder="Enter Student Education"
                        className="input input-bordered input-md w-96"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                    />
                </label>

                <button className="rounded-full bn bg-base-200 p-2 m-5"
                    onClick={editTeacher}
                >
                    Edit Teacher
                </button>
            </div>
        </Base>
    )
}