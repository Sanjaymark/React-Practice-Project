import { createContext, useState, useContext, useEffect } from "react";
import { API2 } from "../API/api";

//step1
const AppCtx2 = createContext();

export function AppProvider2({ children }) {
  
    // database for pages
  const pages = [
    {
      name: "teachers",
      path: "/teacher/all",
    },
  ];

  //step2 create provider subcriber model
  // declaring states
  const [teacherData, setData] = useState([]);
  const [tcrumState, setTcrumState] = useState(pages);

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await fetch(API2, {
        method: "GET",
      });
      console.log(response);
      const data = await response.json();
      console.log("data consoled", data);
      setData(data);
    };
    getAllTeachers();
  }, []);

  return (
    <AppCtx2.Provider
      value={{
        teacherData,
        setData,
        tcrumState,
        setTcrumState,
      }}
    >
      {children}
    </AppCtx2.Provider>
  );
}

export const AppState2 = () => {
  return useContext(AppCtx2);
};

