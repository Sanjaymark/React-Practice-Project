import "./App.css";
import React from "react";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import StudentList from "./Components/StudentList";
import { Routes, Route } from "react-router-dom";
import AddStudents from "./Components/AddStudents";
import EditStudent from "./Components/EditStudent";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />

        <Route path="/profile" element={<Profile/>} />

        <Route path="/student/add" element={<AddStudents/>} />

        <Route path="/edit/:id" element={<EditStudent/>} />

        <Route path="/student/all" element={<StudentList/>} />

      </Routes>
    </div>
  );
}

export default App;
