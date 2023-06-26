import Base from "../BasePage/Base"
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"
import { AppState } from "../Context/AppProvider";

function StudentList(){
    const {studentData} = AppState()
    return (
        <Base>
        <CrumBar/>
            {studentData.map((stud, idx)=>(
                <StudentCard
                student={stud}
                key={idx}
                />
            ))}
        </Base>
    )
}
export default StudentList