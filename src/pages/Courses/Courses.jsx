import React from "react";
import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import SelfCourseList from "./selfcourselist/selfcourselist";
import TopHeader from "../../components/topheader/topheader";
import CourseFilter from "./coursefilter/coursefilter";
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
        <div className="mainCourse">
        <TopHeader title="Courses">
            <CourseFilter/>
        </TopHeader>
        <div class="container">
                <h2>Full-Time Bootcamp</h2>
            <div className="courses">
                <div class="row names">
                    <div class="col">Course Name</div>
                    <div class="col">No. Enrolled</div>
                    <div class="col">% Employment</div>
                    <div class="col">Course Lead</div>
                    <div class="col">Course Start</div>
                    <div class="col">Course Completion</div>
                    <div class="col">Status</div>
                    <div class="col"> </div>
                </div>
                {coursesData}
            </div>
            <div class="container">
                <h2>Self-Paced Bootcamp</h2>
                <div className="courses">
                <div class="row selfnames">
                    <div class="col">Course Name</div>
                    <div class="col">No. Enrolled</div>
                    <div class="col">No. Completed</div>
                    <div class="col">Course Lead</div>
                    <div class="col">% Employment</div>
                    <div class="col"> </div>
                </div>
                </div>
                {selfCourseData}
            </div>
        </div>
        </div>
    )
}
export default Courses;