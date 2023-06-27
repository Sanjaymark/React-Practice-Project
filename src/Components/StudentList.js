import Base from "../BasePage/Base"
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"

function StudentList({studentData, setData, crumState, setCrumState}){
    return (
        <Base>
        <CrumBar 
         crumState ={crumState}
         setCrumState ={setCrumState}
        />
            {studentData.map((stud, idx)=>(
                <StudentCard
                student={stud}
                studentData ={studentData}
                setData={setData}
                key={stud.id}
                crumState ={crumState}
                setCrumState ={setCrumState}
                />
            ))}
        </Base>
    )
}
export default StudentList