
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
  return (
<div className="App">

<Routes>
  <Route exact path="/" element={<Dashboard/>}/>

  <Route path="/student/add" element={<AddStudents/>} />

  <Route path="/teacher/add" element={<AddTeachers/>} />

    <Route path="/edit/:id" element={<EditStudent/>}/>

  <Route path="/edit/teacher/:id" element={<EditTeacher/>} />

  <Route path="/student/all" element={<StudentList/>} />

  <Route path="/teacher/all" element={<TeacherList/>} />
  
</Routes>


</div>
  ); 
}


export default App;





// useState() - day1
// useEffect() -

