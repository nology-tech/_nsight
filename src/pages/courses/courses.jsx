import React, { useState } from "react";
import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import SelfCourseList from "./selfcourselist/selfcourselist";
import TopHeader from "../../components/topheader/topheader";
import CourseFilter from "./coursefilter/coursefilter";
import "./courses.scss";

const Courses = (props) => {
    // Two boolean states
    // 1 for Full time && 1 for Self-paced
    // function to pass into filter, switches from true to false
    // etc.

    const filteredCourseData = courses.filter(
        (course) => course.name !== "Self-Paced Course"
    );
    const coursesData = filteredCourseData.map((course) => {
        return <CourseList key={course.id} course={course} />;
    });

    const selfData = courses.filter(
        (course) => course.name === "Self-Paced Course"
    );
    const selfCourseData = selfData.map((course) => {
        return <SelfCourseList key={course.id} selfCourse={course} />;
    });

    const [fullTime, setFullTime] = useState(true);
    const [selfPaced, setSelfPaced] = useState(true);

    return (
        <div className="mainCourse">
            <TopHeader title="Courses">
                <CourseFilter
                    setFullTime={setFullTime}
                    fullTime={fullTime}
                    setSelfPaced={setSelfPaced}
                    selfPaced={selfPaced}
                />
            </TopHeader>
            <div className="container">
                {fullTime && (
                    <>
                        <h2>Full-Time Bootcamp</h2>
                        <div className="courses">
                            <div className="row names">
                                <div className="col">Course Name</div>
                                <div className="col"> No. Enrolled</div>
                                <div className="col">% Employment</div>
                                <div className="col">Course Lead</div>
                                <div className="col">Course Start</div>
                                <div className="col">Course Completion</div>
                                <div className="col">Status</div>
                                <div className="col-md-1 ms-auto"> </div>
                            </div>
                            {coursesData}
                        </div>
                    </>
                )}
                <div className="container p-0">
                    {selfPaced && (
                        <>
                            <h2>Self-Paced Bootcamp</h2>
                            <div className="courses">
                                <div className="row selfnames">
                                    <div className="col">Course Name</div>
                                    <div className="col">No. Enrolled</div>
                                    <div className="col">No. Completed</div>
                                    <div className="col">Course Lead</div>
                                    <div className="col">% Employment</div>
                                    <div className="col-md-1 ms-auto"></div>
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
