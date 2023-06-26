import { createContext, useState, useContext, useEffect } from "react";
import { API2 } from "../API/api";


//step1
const TeacherCtx = createContext();

function TeacherProvider({ children }) {
  // database for pages
  const pages = [
    {
      name: "teachers",
      path: "/teacher/all",
    },
  ];
  //step2 create provider subcriber model
  // declaring states
  const [teacherData, setTeacherdata] = useState([]);
  const [tcrumState, setTcrumState] = useState(pages);

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await fetch(API2, {
        method: "GET",
      });
      console.log(response);
      const data = await response.json();
      console.log("data consoled", data);
      setTeacherdata(data);
    };
    getAllTeachers();
  }, []);

  return (
    <TeacherCtx.Provider
      value={{
        teacherData,
        setTeacherdata,
        tcrumState,
        setTcrumState,
      }}
    >
      {children}
    </TeacherCtx.Provider>
  );
}

export const TeacherState = () => {
  return useContext(TeacherCtx);
};

export default TeacherProvider;