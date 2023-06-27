import Base from "../BasePage/Base"
import TcrumBar from "./Tcrumbar";
import TeacherCard from "./TeacherCard"

function TeacherList({teacherData, setTdata, tcrumState, setTcrumState})
{
    return (
        <Base>
        <TcrumBar 
         tcrumState ={tcrumState}
         setTcrumState ={setTcrumState}
        />
            {teacherData.map((teac, idx)=>(
                <TeacherCard
                teacher={teac}
                teacherData ={teacherData}
                setTdata={setTdata}
                key={teac.id}
                tcrumState ={tcrumState}
                setTcrumState ={setTcrumState}
                />
            ))}
        </Base>
    )
}

export default TeacherList