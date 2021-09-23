import { useState, useEffect } from "react";
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
    const filterByConsumer = (e) => {
        if (e.target.checked) {
            const filteredConsumers = students.filter(student => student.type === "Consumer");
            setStudents(filteredConsumers);
        } else {
            setStudents(studentsData);
        }
    }

    const filterByConsultant = (e) => {
        if (e.target.checked) {
            const filteredConsultants = students.filter(student => student.type === "Consultant");
            setStudents(filteredConsultants);
        } else {
            setStudents(studentsData);
        }
    }

    const filterByEmployed = (e) => {
        if (e.target.checked) {
            const filteredEmployed = students.filter(student => student.employed);
            setStudents(filteredEmployed);
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
                <Filter filterByConsumer={filterByConsumer} 
                filterByConsultant={filterByConsultant} 
                filterByEmployed={filterByEmployed}
                />
            </div>
            <StudentList studentData={students} />
        </>
    )
};

export default Students;
