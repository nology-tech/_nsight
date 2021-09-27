import React, { useState, useEffect } from "react";
import "./students.scss";
import Searchbox from "../../components/searchbox/searchbox";
import Sort from "../../components/sort/sort";
import StudentList from "../../components/studentList/studentList";
import studentsData from "../../assets/data/student-data";
import Filter from "../../components/filter/filter";

const Students = () => {
    const [students, setStudents] = useState([]);
    

    // Search by first and last name
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

    // Sort by first and last name
    const sortAscendingAZ = (a, b) => {
        if (a.first_name < b.first_name) {
            return -1;
        } else if (a.first_name > b.first_name) {
            return 1;
        } else {
            return 0;
        }
    };

    const sortAscendingByFirstName = () => {
        const studentsSortedByName = students.filter(student => student).sort(sortAscendingAZ);
        setStudents(studentsSortedByName);
    };

    const sortDescendingAZ = (a, b) => {
        if (b.first_name < a.first_name) {
            return -1;
        } else if (b.first_name > a.first_name) {
            return 1;
        } else {
            return 0;
        }
    };

    const sortDescendingByFirstName = () => {
        const studentsSortedByName = students.filter(student => student).sort(sortDescendingAZ);
        setStudents(studentsSortedByName);
    };

    // checking consumer and consultant shows nothing instead of everything
    // unchecking boxes - consider if other boxes are checked
    const filterByCourseName = (e) => {
        if (e.target.checked) {
            const filteredCourseName = students.filter(student => student.course_name === e.target.value);
            setStudents(filteredCourseName);
        } else {
            setStudents(studentsData);
        }
    }

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
                <Sort sortAscendingByFirstName={sortAscendingByFirstName} sortDescendingByFirstName={sortDescendingByFirstName} />
                <Filter studentData={studentsData} filterByCourseName={filterByCourseName} />
            </div>
            <StudentList studentData={students} />
        </>
    )
};

export default Students;
