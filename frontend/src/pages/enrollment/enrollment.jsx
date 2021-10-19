import React, { useEffect, useState } from 'react'
import './enrollment.scss'
// import enrollmentData from "../../assets/data/enrollment-data";
import Filter from "../../components/filter/filter"
import EnrollmentList from "../../components/enrollmentList/enrollmentList"
import TopHeader from '../../components/topheader/topheader';
import Searchbox from '../../components/searchbox/searchbox';

const Enrollment = () => {

    const [enrollments, setEnrollments] = useState([]);
    const [enrollmentsCopy, setEnrollmentsCopy] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [enrollmentData, setEnrollmentData] = useState([]);

    // Returns a promise which returns API data || Error
    const fetchEnrollmentData = () => {
        return fetch("http://localhost:8080/students")
            .then(response => response.json())
            .then(jsonResponse => jsonResponse)
            .catch(err => console.log("err"))
        };

    const handleSearch = (e) => {
        
        const sanitiseInput = e.target.value.toLowerCase();
        const studentSearch = enrollmentData.map((intake) => {
            intake.students.filter((student) => {
                const sanitisedStudentFirstName = student.first_name.toLowerCase();
                const sanitisedStudentLastName = student.last_name.toLowerCase();
                const sanitisedStudentName = `${sanitisedStudentFirstName} ${sanitisedStudentLastName}`;
                // console.log(sanitisedStudentName);
                // console.log("JOINED DATA" + sanitisedStudentName.includes(sanitiseInput))
                console.log(sanitisedStudentName.includes(sanitiseInput));
                return sanitisedStudentName.includes(sanitiseInput);
            })            
        });
        setEnrollmentsCopy(studentSearch);
        // const toShow = studentSearch.slice(pageStart, pageEnd);
        setEnrollments(studentSearch);
        console.log(studentSearch);
        console.log("With search " + enrollments);


        setShowResults(true);
        if (e.target.value.length === 0) {
            setShowResults(false);
            // const toShow = studentsData.slice(pageStart, pageEnd);
            setEnrollments(enrollmentData);
            setEnrollmentsCopy(enrollmentData);
            console.log("Without search " + enrollments);
        }
    };

    const courseNames = enrollmentData.map((student) => student.course.courseName);

    const createStatefulObject = (courseNames) => {
        return courseNames.reduce((statefulObject, courseName) => {
            statefulObject[courseName] = false;
            return statefulObject;
        }, {});
    };

    const [courses, setCourses] = useState(
        createStatefulObject(courseNames)
    );

    const handleSetCourses = (courseName) => {
        const tempCourses = { ...courses };
        tempCourses[courseName] = !tempCourses[courseName];

        setCourses(tempCourses); // not synchronous
        return tempCourses;
    };

    const filterByCourseName = (e) => {
        const courses = handleSetCourses(e.target.value);
        const stateArray = Object.keys(courses).filter((key) => courses[key]);

        const filteredCourseName = enrollmentData.filter((intake) =>
            stateArray.includes(intake.intakeName)
        );

        if (filteredCourseName.length === 0) {
            getEnrollments(enrollmentData);
        } else {
            setEnrollmentsCopy(filteredCourseName);
            setEnrollments(filteredCourseName);
        }

        const filteredStateArray = stateArray.filter((courseName) =>
            courseName.includes(true)
        );

        if (filteredStateArray) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    // Asynchronously handle call to API
    // Get data => set all states that need data
    const getEnrollments = async () => {
        const data = await fetchEnrollmentData();
        setEnrollmentData(data);
        setEnrollments(data);
        setEnrollmentsCopy(data);
    }

    // Call API on page load and set states
    useEffect(() => {
        getEnrollments();
    }, []);

    return (
        <div className="enrollment-container">
            <TopHeader title="Enrollments"/>
            {/* <Searchbox handleSearch={handleSearch} /> */}
            <Filter courses={courses} filterByCourseName={filterByCourseName} />
            <div className="enrollment-list">
                <EnrollmentList enrollmentData={enrollments} />
            </div>
        </div>
    )
}

export default Enrollment
