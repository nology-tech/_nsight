import React, { useState, useEffect } from "react";
import "./students.scss";
import Searchbox from "../../components/searchbox/searchbox";
import Sort from "../../components/sort/sort";
import StudentList from "../../components/studentList/studentList";
import studentsData from "../../assets/data/student-data";
import Filter from "../../components/filter/filter";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import downArrow from "../../assets/icons/down-arrow.svg";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [pagination, setPagination] = useState(false);

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    console.log(studentsData);

    const courseNames = studentsData.map(student => student.course_name);

    const uniqueCourseNames = courseNames.filter(unique);
    
    const createStatefulObject = (courseNames) => {
        return courseNames.reduce((statefulObject, courseName) => {
            statefulObject[courseName] = false;
            return statefulObject;
        }, {})
    }

    const [courses, setCourses] = useState(createStatefulObject(uniqueCourseNames))

    const handleSetCourses = (courseName) => {
        const tempCourses = {...courses};
        tempCourses[courseName] = !tempCourses[courseName];

        setCourses(tempCourses); // not synchronous
        return tempCourses;
    }
    console.log(courses)

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

        setShowResults(true)
        if (e.target.value.length === 0) {
            setShowResults(false)
            const toShow = studentsData.slice(pageStart, pageEnd);
            setStudents(toShow);
        }
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

    const filterByCourseName = (e) => {
        const courses = handleSetCourses(e.target.value);
        const stateArray = [];

        Object.keys(courses).filter(key => {
            if (courses[key]) {
                stateArray.push(key)
            }
        });

        const filteredCourseName = studentsData.filter(student => stateArray.includes(student.course_name));

        if (filteredCourseName.length === 0) {
            getStudents(studentsData);
        } else {
            setStudents(filteredCourseName);
        }

        const filteredStateArray = stateArray.filter(courseName => courseName.includes(true));
        
        if (filteredStateArray) {
            setShowResults(true)
        } else {
            setShowResults(false)
        }

    };

    const [pageStart, setPageStart] = useState(0);
    const [pageEnd, setPageEnd] = useState(10);

    const displayPage = (pageStart, pageEnd) => {
        const toShow = studentsData.slice(pageStart, pageEnd);
        setStudents(toShow);
    }

    const nextPage = () => {
        const newPageStart = pageStart+ 10;
        const newPageEnd = pageEnd+ 10;
        if (newPageStart < studentsData.length) {
            setPageStart(newPageStart);
        }
        if (newPageEnd > studentsData.length) {
            setPageEnd(studentsData.length);
        } else {
            setPageEnd(newPageEnd);
        }
        if (newPageStart < studentsData.length) {
            displayPage(newPageStart, newPageEnd);
        }
    }

    const previousPage = () => {
        const newPageStart = pageStart- 10;
        let newPageEnd = pageEnd- 10;
        if (newPageStart >= 0) {
            setPageStart(newPageStart);
        }
        if (newPageEnd % 10 != 0) {
            setPageEnd(pageEnd - (newPageEnd % 10));
            newPageEnd = pageEnd - (newPageEnd % 10);
        } else {
            if (newPageEnd > 0) {
                setPageEnd(newPageEnd);
            }
        }
        if (newPageStart >= 0) {
            displayPage(newPageStart, newPageEnd);
            if (pageEnd < 10) {
                displayPage(newPageStart, 10)
            } else {
                displayPage(newPageStart, newPageEnd);
            }
        }
    }

    // Pagination
    const togglePagination = () => {
        setPagination(!pagination);
    }

    const getStudents = () => {
        // setStudents(studentsData);
        const toShow = studentsData.slice(pageStart, pageEnd);
        setStudents(toShow);
    };

    useEffect(() => {
        getStudents();
    }, []);


    //  when search, 'showing 1-10' does not update - needs to disappear, wrap 172-174 in div and use "-- && div"
    const [showResults, setShowResults] = useState(false);

    return (
        <div className="student-list">
            <div className="list-title">
                <h3 className="list-title__heading">Student List</h3>
                <Searchbox handleSearch={handleSearch} />
                <Sort sortAscendingByFirstName={sortAscendingByFirstName} sortDescendingByFirstName={sortDescendingByFirstName} />
                <Filter courses={courses} filterByCourseName={filterByCourseName} />
            </div>
            <StudentList studentData={students} />
            <div className="pagination">
                <p>Rows per page</p>
                <img onClick={togglePagination} src={downArrow} alt="down arrow" />
                {pagination &&
                    <ul>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>25</li>
                    <li>30</li>
                </ul>}
            </div>
            <div>
                {!showResults && <p>{pageStart+1}-{pageEnd} of {studentsData.length}</p>}
                {showResults && <p>Showing results: {pageStart+1}- of {students.length}</p>}
            </div>
            <img src={chevronLeft} alt="previous page" onClick={previousPage} />
            <img src={chevronRight} alt="next page" onClick={nextPage} />
        </div>
    );
};

export default Students;
