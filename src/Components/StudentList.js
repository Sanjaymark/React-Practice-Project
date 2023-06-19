import Base from "../BasePage/Base"
import {AppState} from "../Context/AppProvider"
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"

function StudentList(){
    const {studentData} = AppState()
    return (
        <Base>
        <CrumBar/>
            {studentData.map((stud, idx)=>(
                <StudentCard
                student={stud}
                key={stud.id}
                />
            ))}
        </Base>
    )
}
export default StudentList