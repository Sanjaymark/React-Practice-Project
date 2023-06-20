import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { API } from "../API/api";


//step1
const AppCtx = createContext();

function AppProvider({ children }) {
  //step2 create provider subcriber model
  //student data
  const database = [
    {
      id: 1,
      name: "Kishore",
      batch: "b47WD",
      email: "abc@gmail.com",
      phone: 782465244,
      qualification: "B.E",
    },
    {
      id: 2,
      name: "Aditiya",
      batch: "b47WD",
      email: "adc@gmail.com",
      phone: 652664624,
      qualification: "B.Tech",
    },
  ];
  // database for pages
  const pages = [
    {
      name: "students",
      path: "/student/all",
    },
  ];

  // declaring states
  const [studentData, setData] = useState([]);
  const [crumState, setCrumState] = useState(pages);

useEffect(()=>{
  const getAllStudents = async()=>{
    const response = await fetch(API,{
      method:"GET"

    });
    console.log(response)
    const data = await response.json();
    console.log("data consoled", data)
    setData(data)
  }
  getAllStudents();
},[])


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
  return (useContext(AppCtx));
};

export default AppProvider;