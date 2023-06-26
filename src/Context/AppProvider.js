import { createContext, useState, useContext, useEffect } from "react";
import { API } from "../API/api";

//step1
const AppCtx = createContext();

function AppProvider({ children }) {
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
      const response = await fetch(API, {
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
    <AppCtx.Provider
      value={{
        studentData,
        setData,
        crumState,
        setCrumState,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export const AppState = () => {
  return useContext(AppCtx);
};

export default AppProvider;