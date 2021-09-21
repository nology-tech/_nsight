import "./students.scss";
import students from "../../assets/data/student-data";


const Students = () => {
    const studentData = students.map(student => (
        <div>
            <p>{student.first_name} {student.last_name}</p>
            <p>{student.email}</p>
            <p>{student.mobile_number}</p>
            <p>{student.type}</p>
            <p>{student.employed}</p>
            <p>{student.course_name}</p>
        </div>
    ))

    return (
        <div>
            {studentData}
        </div>
    )
}

export default Students;
