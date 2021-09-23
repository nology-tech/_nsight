import React from "react";
import "./selfcouselist.scss";
import arrow from "../../../assets/icons/chevron-more.svg";

const SelfCourseList = (props) => {
    const { selfCourse } = props;
    console.log("line 6")
    return(
        <>
            <div className="selfcourse">
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <p>{selfCourse.name}</p>
                        </div>
                        <div class="col">
                            <p>{selfCourse.numberEnrolled}</p>
                        </div>
                        <div className="col">
                            <p>{selfCourse.numberCompleted}</p>
                        </div>
                        <div className="col">
                        <p>{selfCourse.courseLead}</p>
                        </div>
                        <div className="col">
                            <p>{selfCourse.percentageEmployed}</p>
                        </div>
                        <div class="col">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelfCourseList