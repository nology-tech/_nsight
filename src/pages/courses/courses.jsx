import React, { useState } from "react";
import courses from "../../assets/data/coursedata";
import CourseList from "./CourseList/CourseList";
import SelfCourseList from "./selfcourselist/selfcourselist";
import TopHeader from "../../components/topheader/topheader";
import CourseFilter from "./coursefilter/coursefilter";
import dummyPage from "../dummyPage/dummyPage";
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
        return <CourseList course={course} />;
    });

    const selfData = courses.filter(
        (course) => course.name === "Self-Paced Course"
    );
    const selfCourseData = selfData.map((course) => {
        return <SelfCourseList selfCourse={course} />;
    });

    const [searchResults, setSearchResults] = useState("");
    const [fullTime, setFullTime] = useState(true);
    const [selfPaced, setSelfPaced] = useState(true);

    return (
        <div className="mainCourse">
            <TopHeader title="Courses">
                <CourseFilter setFullTime={setFullTime} fullTime={fullTime} setSelfPaced={setSelfPaced} selfPaced={selfPaced} />
            </TopHeader>
            <div class="container">
                {fullTime && (
                    <>
                        <h2>Full-Time Bootcamp</h2>
                        <div className="courses">
                            <div class="row names">
                                <div class="col">Course Name</div>
                                <div class="col"> No. Enrolled</div>
                                <div class="col">% Employment</div>
                                <div class="col">Course Lead</div>
                                <div class="col">Course Start</div>
                                <div class="col">Course Completion</div>
                                <div class="col">Status</div>
                                <div class="col"> </div>
                            </div>
                            {coursesData}
                        </div>
                    </>
                )}
                <div class="container p-0">
                    {selfPaced && (
                        <>
                            <h2>Self-Paced Bootcamp</h2>
                            <div className="courses">
                                <div class="row selfnames">
                                    <div class="col">Course Name</div>
                                    <div class="col">No. Enrolled</div>
                                    <div class="col">No. Completed</div>
                                    <div class="col">Course Lead</div>
                                    <div class="col">% Employment</div>
                                    <div class="col"></div>
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
