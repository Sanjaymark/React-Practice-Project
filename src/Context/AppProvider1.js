import { createContext, useState, useContext, useEffect } from "react";
import { API1 } from "../API/api";

//step1
const AppCtx1 = createContext();

export function AppProvider1({ children }) {
  
    // database for pages
  const pages = [
    {
      name: "students",
      path: "/student/all",
    },
  ];

  //step2 create provider subcriber model
  // declaring states
  const [studentData, setData] = useState([]);
  const [crumState, setCrumState] = useState(pages);

  useEffect(() => {
    const getAllStudents = async () => {
      const response = await fetch(API1, {
        method: "GET",
      });
      console.log(response);
      const data = await response.json();
      console.log("data consoled", data);
      setData(data);
    };
    getAllStudents();
  }, []);

  return (
    <AppCtx1.Provider
      value={{
        studentData,
        setData,
        crumState,
        setCrumState,
      }}
    >
      {children}
    </AppCtx1.Provider>
  );
}

export const AppState1 = () => {
  return useContext(AppCtx1);
};

