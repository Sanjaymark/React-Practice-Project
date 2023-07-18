import { createContext, useState, useContext, useEffect } from "react";
import { API } from "../API/api";

//step1
const AppCtx = createContext();

function AppProvider({ children }) {
  // database for pages
  const pages = [
    {
      name: "students",
      path: "/students/all",
    },
  ];
  //step2 create provider subcriber model
  // declaring states
  const [studentData, setData] = useState([]);
  const [crumState, setCrumState] = useState(pages);

  useEffect(() => {
    const getAllStudents = async () => {
      const response = await fetch(`${API}/students/all`, {
        method: "GET",
        headers: {
          "x-auth-token":localStorage.getItem("token")
        }
      });
      const data = await response.json();
      if(data.message)
      {
        console.log(data.message)
        return
      }
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