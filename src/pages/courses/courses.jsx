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
            <div class="container p-0 pt-5">
                {fullTime && (
                    <>
                        <h3>Full-Time Bootcamp</h3>
                        <div className="courses">
                            <div class="row names w-100">
                                <div class="col-2"> <p>Course Name</p></div>
                                <div class="col-1"> <p> No. Enrolled </p> </div>
                                <div class="col-1"> <p> % Employment </p></div>
                                <div class="col-2"><p>Course Lead</p></div>
                                <div class="col-2"><p>Course Start</p></div>
                                <div class="col-2"><p>Course Completion</p></div>
                                <div class="col-1"><p>Status</p></div>
                                <div class="col-1"></div>
                            </div>
                            {coursesData}
                        </div>
                    </>
                )}
                <div class="container p-0 pt-2">
                    {selfPaced && (
                        <>
                            <h3>Self-Paced Bootcamp</h3>
                            <div className="courses">
                                <div class="row selfnames w-100">
                                    <div class="col-2"><p>Course Name</p></div>
                                    <div class="col-2"><p>No. Enrolled</p></div>
                                    <div class="col-2"><p>No. Completed</p></div>
                                    <div class="col-3"><p>Course Lead</p></div>
                                    <div class="col-2"><p>% Employment</p></div>
                                    <div class="col-1"></div>
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
