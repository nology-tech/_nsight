import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import "./Courses.scss"

const Courses = () => {
    console.log("courses")
    const coursesData = courses.map(course => {
        return(
            <CourseList course={course}/>)
    });

    return (
        <>
        <Container>
            <h2>Full-Time Bootcamp</h2>
        <Row>
            <Col>Course Name</Col>
            <Col>No. Enrolled</Col>
            <Col>% Employment</Col>
            <Col>Course Lead</Col>
            <Col>Course Start</Col>
            <Col>Course Completion</Col>
            <Col>Status</Col>
            <Col> </Col>
            </Row>
            {coursesData}
        </Container>
        </>
    )
}
export default Courses;