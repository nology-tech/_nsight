import React from 'react'
import "./CourseList.scss"

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
            <p>{course.name}</p>
            <p>{course.numberEnrolled}</p>
            <p>{course.percentageEmployed}</p>
            <p>{course.courseLead}</p>
            <p>{course.courseStart}</p>
            <p>{course.courseCompletion}</p>
            <p>{status}</p>
        </div>
    )
}

export default CourseList
