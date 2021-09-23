import { useState, useEffect } from "react";
import "./students.scss";
import Searchbox from "../../components/searchbox/searchbox";
import StudentList from "../../components/studentList/studentList";
import studentsData from "../../assets/data/student-data";

const Students = () => {
    const [students, setStudents] = useState([]);

    const handleSearch = (e) => {
        const sanitiseInput = e.target.value.toLowerCase();
        const studentSearch = studentsData.filter(student => {
            const sanitisedStudentFirstName = student.first_name.toLowerCase();
            const sanitisedStudentLastName = student.last_name.toLowerCase();
            const sanitisedStudentName = `${sanitisedStudentFirstName} ${sanitisedStudentLastName}`;
            return sanitisedStudentName.includes(sanitiseInput);
        })
        setStudents(studentSearch)
    };

    const getStudents = () => {
        setStudents(studentsData);
    };

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <>
            <div className="list-title">
                <h3 className="list-title__heading">Student List</h3>
                <Searchbox handleSearch={handleSearch} />
            </div>
            <StudentList studentData={students} />
        </>
    )
};

export default Students;
