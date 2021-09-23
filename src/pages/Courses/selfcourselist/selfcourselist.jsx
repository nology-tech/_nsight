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
                            <h5>{selfCourse.name}</h5>
                        </div>
                        <div class="col">
                            <p className="selfcourse__tag">{selfCourse.numberEnrolled}</p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">{selfCourse.numberCompleted}</p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">{selfCourse.courseLead}</p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">{selfCourse.percentageEmployed}</p>
                        </div>
                        <div class="col arrow">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelfCourseList