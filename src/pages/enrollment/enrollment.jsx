import React, { useEffect, useState } from 'react'
import './enrollment.scss'
import enrollmentData from "../../assets/data/enrollment-data";
import Filter from "../../components/filter/filter"
import EnrollmentList from "../../components/enrollmentList/enrollmentList"
import TopHeader from '../../components/topheader/topheader';

const Enrollment = () => {

    const [enrollments, setEnrollments] = useState([]);
    const [enrollmentsCopy, setEnrollmentsCopy] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const courseNames = enrollmentData.map((courses) => courses.intakeName);

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

    const getEnrollments = () => {
        setEnrollments(enrollmentData);
        setEnrollmentsCopy(enrollmentData);
    }

    useEffect(() => {
        getEnrollments();
    }, []);

    return (
        <div className="enrollment-container">
            <TopHeader title="Enrollments"/>
            <Filter courses={courses} filterByCourseName={filterByCourseName} />
            <div className="enrollment-list">
                <EnrollmentList enrollmentData={enrollments} />
            </div>
        </div>
    )
}

export default Enrollment
