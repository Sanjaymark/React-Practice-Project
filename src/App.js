
import './App.css';
import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard';
import StudentList from './Components/StudentList';
import { Routes, Route } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import EditStudent from './Components/EditStudent';
import AddTeachers from './Components/AddTeachers'
import EditTeacher from './Components/EditTeacher'
import TeacherList from './Components/TeacherList'



function App() {


const studentData = [
     {
      id: 1,
      name : "Kishore",
      batch: "b47WD",
      email: "abc@gmail.com",
      phone: 782465244,
      qualification: "B.E"
     },
     {
      id: 2,
      name : "Aditiya",
      batch: "b47WD",
      email: "adc@gmail.com",
      phone: 652664624,
      qualification: "B.Tech"
     },
]

const teacherData = [
  {
   id: 1,
   name : "Sanjay",
   batch: "16",
   email: "sanjay@gmail.com",
   phone: 7799316903,
   qualification: "B.E"
  },
  {
    id: 2,
   name : "Ajay",
   batch: "25",
   email: "ajay@gmail.com",
   phone: 9550316853,
   qualification: "B.Tech"
  },
]

const pages = [
  {
    name : "students",
    path : "/student/all"
  }
]

const tpages = [
  {
    name : "teachers",
    path : "/teacher/all"
  }
]

const [data, setData] = useState(studentData)
const [tdata, setTdata] = useState(teacherData)
const [crumState, setCrumState] = useState(pages)
const [tcrumState, setTcrumState] = useState(tpages)
  return (
<div className="App">

<Routes>
  <Route exact path="/" element={<Dashboard/>}/>

  <Route
  path="/student/add" element={<AddStudents
    studentData={data}
    setData ={setData}
  />}
  />

  <Route
  path="/teacher/add" element={<AddTeachers
    teacherData={tdata}
    setTdata ={setTdata}
  />}
  />

    <Route
  path="/edit/:id" element={<EditStudent
    studentData={data}
    setData ={setData}
    crumState ={crumState}
    setCrumState ={setCrumState}
  />}
  />

  <Route
  path="/edit/:id" element={<EditTeacher
    teacherData={tdata}
    setTdata ={setTdata}
    tcrumState ={tcrumState}
    setTcrumState ={setTcrumState}
  />}
  />

  <Route path="/student/all" element={
    <StudentList 
    crumState ={crumState}
    setCrumState ={setCrumState}
    studentData={data}
    setData ={setData}
    />}/>

  <Route path="/teacher/all" element={
    <TeacherList
    tcrumState ={tcrumState}
    setTcrumState ={setTcrumState}
    teacherData={tdata}
    setTdata ={setTdata}
    />}/>
</Routes>


</div>
  ); 
}


export default App;





// useState() - day1
// useEffect() -

