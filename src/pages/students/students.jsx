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
    const [studentsCopy, setStudentsCopy] = useState([]);
    const [pagination, setPagination] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [pageStart, setPageStart] = useState(0);
    const [pageEnd, setPageEnd] = useState(perPage);
    const [showResults, setShowResults] = useState(false);

    // SEARCH by first and last name
    const handleSearch = (e) => {
        const sanitiseInput = e.target.value.toLowerCase();
        const studentSearch = studentsData.filter(student => {
            const sanitisedStudentFirstName = student.first_name.toLowerCase();
            const sanitisedStudentLastName = student.last_name.toLowerCase();
            const sanitisedStudentName = `${sanitisedStudentFirstName} ${sanitisedStudentLastName}`;
            return sanitisedStudentName.includes(sanitiseInput);
        })
        setStudentsCopy(studentSearch);
        const toShow = studentSearch.slice(pageStart, pageEnd);
        setStudents(toShow);

        setShowResults(true)
        if (e.target.value.length === 0) {
            setShowResults(false)
            const toShow = studentsData.slice(pageStart, pageEnd);
            setStudents(toShow);
        }
    };

    // SORT by first and last name
    // SORTING ONLY SORTS THE PAGE VISIBLE AS RELIES ON STUDENTS STATE
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
        const studentsSortedByName = studentsCopy.filter(student => student).sort(sortAscendingAZ);
        setStudentsCopy(studentsSortedByName);

        const toShow = studentsSortedByName.slice(pageStart, pageEnd);
        setStudents(toShow);
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
        const studentsSortedByName = studentsCopy.filter(student => student).sort(sortDescendingAZ);
        setStudentsCopy(studentsSortedByName);

        const toShow = studentsSortedByName.slice(pageStart, pageEnd);
        setStudents(toShow);
    };

    // FILTER - Dynamic filter checkboxes
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

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
            setStudentsCopy(filteredCourseName);
            const filtered = filteredCourseName.slice(pageStart, pageEnd);
            setStudents(filtered);
        }

        const filteredStateArray = stateArray.filter(courseName => courseName.includes(true));
        
        if (filteredStateArray) {
            setShowResults(true)
        } else {
            setShowResults(false)
        }

    };

    // PAGINATION
    const displayPage = (pageStart, pageEnd) => {
        const toShow = studentsData.slice(pageStart, pageEnd);
        setStudents(toShow);
    }

    const nextPage = () => {
        const newPageStart = pageStart + perPage;
        const newPageEnd = pageEnd + perPage;
        if (newPageStart < studentsCopy.length) {
            setPageStart(newPageStart);
        }
        if (newPageEnd > studentsCopy.length) {
            setPageEnd(studentsCopy.length);
        } else {
            setPageEnd(newPageEnd);
        }
        if (newPageStart < studentsData.length) {
            const toShow = studentsCopy.slice(newPageStart, newPageEnd);
            setStudents(toShow);
        }
    }

    const previousPage = () => {
        const newPageStart = pageStart - perPage;
        let newPageEnd = pageEnd - perPage;
        if (newPageStart >= 0) {
            setPageStart(newPageStart);
        }
        if (newPageEnd % perPage != 0) {
            setPageEnd(pageEnd - (newPageEnd % perPage));
            newPageEnd = pageEnd - (newPageEnd % perPage);
        } else {
            if (newPageEnd > 0) {
                setPageEnd(newPageEnd);
            }
        }
        if (newPageStart >= 0) {
            const toShow = studentsCopy.slice(newPageStart, newPageEnd);
            setStudents(toShow);

            if (pageEnd < perPage) {
                const toShow = studentsCopy.slice(newPageStart, perPage);
                setStudents(toShow);
            } else {
                const toShow = studentsCopy.slice(newPageStart, newPageEnd);
                setStudents(toShow);
            }
        }
    }

    const togglePagination = () => {
        setPagination(!pagination);
    }

    const togglePerPage = (e) => {
        setPerPage(e.target.value);
        setPageStart(0);
        setPageEnd(e.target.value);
        displayPage(0, e.target.value);
        togglePagination();
    }

    const getStudents = () => {
        const toShow = studentsData.slice(pageStart, pageEnd);
        setStudentsCopy(studentsData);
        setStudents(toShow);
        setStudentsCopy(studentsData);
    };

    useEffect(() => {
        getStudents();
    }, []);

    let length = 0;
    if (students.length > perPage) {
        length = perPage
    } else {
        length = students.length
    }


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
                <p onClick={togglePagination}>{perPage} <img src={downArrow} alt="down arrow" /></p>
                {pagination &&
                    <ul>
                    <li onClick={togglePerPage} value="5">5</li>
                    <li onClick={togglePerPage} value="10">10</li>
                    <li onClick={togglePerPage} value="15">15</li>
                    <li onClick={togglePerPage} value="20">20</li>
                    <li onClick={togglePerPage} value="25">25</li>
                    <li onClick={togglePerPage} value="30">30</li>
                </ul>}
                
            </div>
            <div>
                {!showResults && <p>{pageStart+1}-{pageEnd} of {studentsData.length}</p>}
                {/* students is updated for pagination, so students.length will always be number of rows per page - need to make number of entries total of filter/search result */}
                {showResults && <p>Showing results: {length} of {studentsCopy.length}</p>}
            </div>
            <img src={chevronLeft} alt="previous page" onClick={previousPage} />
            <img src={chevronRight} alt="next page" onClick={nextPage} />
        </div>
    );
};

export default Students;
