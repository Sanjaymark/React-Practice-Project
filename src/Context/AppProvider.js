import { createContext, useState, useContext } from "react";

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
  const [studentData, setData] = useState(database);
  const [crumState, setCrumState] = useState(pages);
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