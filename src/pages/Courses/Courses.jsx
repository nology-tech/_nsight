import React from "react";
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
            {coursesData}
        </>
    )
}
export default Courses;