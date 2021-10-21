import React, { useState, useEffect } from "react";
// import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import SelfCourseList from "./selfcourselist/selfcourselist";
import TopHeader from "../../components/topheader/topheader";
import CourseFilter from "./coursefilter/coursefilter";
import "./courses.scss";

const Courses = (props) => {

    const [courses, setCourses] = useState([]); 

    const fetchCourseData = () => {
        fetch("http://localhost:8080/courses")
        .then(response => response.json())
        .then(jsonResponse => setCourses(jsonResponse))
        .catch(err => console.log("err"))};

    useEffect(() => {fetchCourseData()},[]);

    const filteredCourseData = courses.filter(
        (course) => course.courseName !== "Self-Paced Course"
    );
    const coursesData = filteredCourseData.map((course) => {
        return <CourseList key={course.id} course={course} />;
    });

    const selfData = courses.filter(
        (course) => course.courseName === "Self-Paced Course"
    );
    const selfCourseData = selfData.map((course) => {
        return <SelfCourseList key={course.id} selfCourse={course} />;
    });

    const [fullTime, setFullTime] = useState(true);
    const [selfPaced, setSelfPaced] = useState(true);

    return (
        <div className="mainCourse">
            <TopHeader title="Courses" buttonText="+  Create">
                <CourseFilter
                    setFullTime={setFullTime}
                    fullTime={fullTime}
                    setSelfPaced={setSelfPaced}
                    selfPaced={selfPaced}
                />
            </TopHeader>
            <div className="container p-0">
                {fullTime && (
                    <>
                        <h3>Full-Time Bootcamp</h3>
                        <div className="courses">
                            <div className="row names w-100">
                                <div className="col-2"> <p>Course Name</p></div>
                                <div className="col-1"> <p> No. Enrolled </p> </div>
                                <div className="col-1"> <p> % Employment </p></div>
                                <div className="col-2"><p>Course Lead</p></div>
                                <div className="col-2"><p>Course Start</p></div>
                                <div className="col-2"><p>Course Completion</p></div>
                                <div className="col-1"><p>Status</p></div>
                                <div className="col-1"></div>
                            </div>
                            {coursesData}
                        </div>
                    </>
                )}
                <div className="container p-0">
                    {selfPaced && (
                        <>
                            <h3>Self-Paced Bootcamp</h3>
                            <div className="courses">
                                <div className="row selfnames w-100">
                                    <div className="col-2"><p>Course Name</p></div>
                                    <div className="col-2"><p>No. Enrolled</p></div>
                                    <div className="col-2"><p>No. Completed</p></div>
                                    <div className="col-3"><p>Course Lead</p></div>
                                    <div className="col-2"><p>% Employment</p></div>
                                    <div className="col-1"></div>
                                </div>
                                {selfCourseData}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Courses;
