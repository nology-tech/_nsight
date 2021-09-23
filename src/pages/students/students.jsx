import "./students.scss";
import studentsData from "../../assets/data/student-data";
import Searchbox from "../../components/searchbox/searchbox";
import { useState, useEffect } from "react";
import StudentList from "../../components/studentList/studentList";


const Students = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState("");

    // key in search term
    // onchange 
    // sanitize input and data file (same casing)
    // split the search term for the first and last name
    // check through the data for the first name, last name given the search term
    // display relevant student

    const handleSearch = (e) => {
        const sanitiseInput = e.target.value.toLowerCase();
        const studentSearch = studentsData.filter(student => {
            const sanitisedStudentName = student.first_name.toLowerCase();
            return sanitisedStudentName.includes(sanitiseInput);
        })
        setSearchTerm(studentSearch)
    }

    const getStudents = () => {
        setStudents(studentsData);
    }


    // add first and last name together in filter and check that way?
    // remove table logic as component

    useEffect(() => {
        getStudents();
    }, []);


    

    return (
        <>
            <div className="list-title">
                <h3 className="list-title__heading">Student List</h3>
                <Searchbox searchTerm={searchTerm} handleSearch={handleSearch} />
            </div>
            <StudentList studentData={students} />
        </>
    )
}

export default Students;
