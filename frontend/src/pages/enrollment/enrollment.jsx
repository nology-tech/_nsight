import React, { useEffect, useState } from 'react'
import './enrollment.scss'
// import enrollmentData from "../../assets/data/enrollment-data";
import Filter from "../../components/filter/filter"
import EnrollmentList from "../../components/enrollmentList/enrollmentList"
import TopHeader from '../../components/topheader/topheader';
import Searchbox from '../../components/searchbox/searchbox';

const Enrollment = () => {

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

    const cleanEnrollmentData = (enrollmentData) => {
        return enrollmentData.reduce((arr, student) => {
            const foundObject = arr.find((enrollment) => enrollment.intakeName === student.course.courseName)

            if(foundObject) {
                foundObject.students.push(student);
            } else {
                const newObj = {
                    id: student.course.id,
                    intakeName: student.course.courseName,
                    students: []
                };
                
                newObj.students.push(student);
                arr.push(newObj);
            }

            return arr;
        }, [])
    }
    
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
        setEnrollmentData(studentSearch);
        console.log(studentSearch);
        console.log("With search " + enrollmentData);


        setShowResults(true);
        if (e.target.value.length === 0) {
            setShowResults(false);
            // const toShow = studentsData.slice(pageStart, pageEnd);
            setEnrollmentData(enrollmentData);
            setEnrollmentsCopy(enrollmentData);
            console.log("Without search " + enrollmentData);
        }
    };

    const createStatefulObject = (courseNames) => {
        return courseNames.reduce((statefulObject, courseName) => {
            statefulObject[courseName] = false;
            console.log(courseNames);
            return statefulObject;
        }, {});
    };

    const [courses, setCourses] = useState({});

    const handleSetCourses = (courseName) => {
        const tempCourses = { ...courses };
        tempCourses[courseName] = !tempCourses[courseName];

        setCourses(tempCourses); // not synchronous
        return tempCourses;
    };

    const filterByCourseName = (e) => {
        const courses = handleSetCourses(e.target.value);
        console.log("hello");
        const stateArray = Object.keys(courses).filter((key) => courses[key]);

        const filteredCourseName = enrollmentsCopy.filter((intake) => stateArray.includes(intake.intakeName));

        if (filteredCourseName.length === 0) {
            getEnrollments(enrollmentData);
        } else {
            setEnrollmentData(filteredCourseName);
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
        const cleanedData = cleanEnrollmentData(data);
        setEnrollmentData(cleanedData);
        setEnrollmentsCopy(cleanedData);
        
        return cleanedData;
    }

    // Call API on page load and set states
    useEffect(() => {
        const asyncHandler = async () => {
            const cleanedData = await getEnrollments();
            const courseNames = cleanedData.map((intake) => intake.intakeName);
            setCourses(createStatefulObject(courseNames));
        }
        asyncHandler();
    }, []);

    return (
        <div className="enrollment-container">
            <TopHeader title="Enrollments"/>
            {/* <Searchbox handleSearch={handleSearch} /> */}
            <Filter courses={courses} filterByCourseName={filterByCourseName} />
            <div className="enrollment-list">
                <EnrollmentList enrollmentData={enrollmentData} />
            </div>
        </div>
    )
}

export default Enrollment
