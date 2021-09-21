import "./students.scss";
import students from "../../assets/data/student-data";


const Students = () => {
    const studentData = students.map(student => {
        return student.first_name;
    })

    return (
        <div>
            {studentData}
        </div>
    )
}

export default Students;
