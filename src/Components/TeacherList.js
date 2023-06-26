import Base from "../BasePage/Base"
import TcrumBar from "./Tcrumbar";
import TeacherCard from "./TeacherCard"
import { TeacherState } from "../Context/TeacherProvider"

function TeacherList()
{
    const {teacherData} = TeacherState()
    return (
        <Base>
        <TcrumBar/>
            {teacherData.map((teac, idx)=>(
                <TeacherCard
                teacher={teac}
                key={idx}
                
                />
            ))}
        </Base>
    )
}

export default TeacherList