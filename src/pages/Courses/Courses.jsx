import React from "react";
import Container from "react-bootstrap/Container";
import courses from "../../assets/data/coursedata";
import courseList from "./courseList/courseList";
import "./Courses.scss"

const Courses = () => {

    const coursesData = courses.map(course => {
        <courseList course={course}/>
    });

    return (
        <>
            {coursesData}
        </>
    )
}
export default Courses;