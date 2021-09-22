import React from "react";
import "./selfcouselist.scss";

const SelfCourseList = (props) => {
    const { selfCourse } = props;
    console.log("line 6")
    return(
        <>
            <div>
                <p>{selfCourse.name}</p>
                <p>{selfCourse.numberEnrolled}</p>
                <p>{selfCourse.numberCompleted}</p>
                <p>{selfCourse.courseLead}</p>
                <p>{selfCourse.percentageEmployed}</p>
            </div>
        </>
    )
}
export default SelfCourseList