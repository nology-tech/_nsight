import React from "react";
import Container from "react-bootstrap/Container";
import data from "../../assets/data/coursedata";
import "./Courses.scss"

const Courses = () => {

    const coursesData = data.map(course => {
        return (
        <Container course={course}/>
        )
    });

    return (
        <>
            {coursesData}
        </>
    )
}
export default Courses;