import React from 'react'
import "./CourseList.scss"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CourseList = (props) => {
    const {course} = props

    let status = "";
    if(course.status === false){
        status = "InActive"
    }else {
        status = "Active"
    }
    return (
        <div className="Courselist">
          <Container>
            <Row>
              <Col>
                <p>{course.name}</p>
              </Col>
              <Col>
                <p>{course.numberEnrolled}</p>
              </Col>
              <Col>
                <p>{course.percentageEmployed}</p>
              </Col>
              <Col>
                <p>{course.courseLead}</p>
              </Col>
              <Col>
                <p>{course.courseStart}</p>
              </Col>
              <Col>
                <p>{course.courseCompletion}</p>
              </Col>
              <Col>
                <p>{status}</p>
              </Col>
              <Col>
              >
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default CourseList
