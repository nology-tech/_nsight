import React from "react";
import Container from 'react-bootstrap/Container' //Remove this <==
import Row from 'react-bootstrap/Row'  //Remove this <==
import Col from 'react-bootstrap/Col' //Remove this <==
import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import SelfCourseList from "./selfcourselist/selfcourselist";
import "./Courses.scss"

const Courses = (props) => {

    const filteredCourseData = courses.filter(course => course.name !== "Self-Paced Course")
    const coursesData = filteredCourseData.map(course => {
        return(
            <CourseList course={course}/>)
    });

    const selfData = courses.filter(course => course.name === "Self-Paced Course");
    const selfCourseData = selfData.map(course => {
        return(
            <SelfCourseList selfCourse={course}/>
        )
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
            {selfCourseData}
        </>
    )
}
export default Courses;