import React from "react";
import "./CourseList.scss";
import arrow from "../../../assets/icons/chevron-more.svg";
import { Link } from "react-router-dom";

const CourseList = (props) => {
    const { course } = props;

    let status = "";
    let statColour = "";
    if (course.status === false) {
        status = "Inactive";
        statColour = "red";
    } else {
        status = "Active";
        statColour = "green";
    }
    return (
        <div className="courselist">
                <div className="row w-100">
                    <div className="col-2">
                        <p className="courselist__name">{course.courseName}</p>
                    </div>
                    <div className="col-1">
                        <p className="courselist__tag">{course.numberEnrolled}</p>
                    </div>
                    <div className="col-1">
                        <p className="courselist__tag">{course.percentageEmployed}</p>
                    </div>
                    <div className="col-2">
                        <p className="courselist__tag">{course.courseLead}</p>
                    </div>
                    <div className="col-2">
                        <p className="courselist__tag">{course.courseStart}</p>
                    </div>
                    <div className="col-2">
                        <p className="courselist__tag">{course.courseCompletion}</p>
                    </div>
                    <div className="col-1">
                        <div className="stats">
                            <li style={{ color: statColour }}>{status}</li>
                        </div>
                    </div>
                    <div className="col-1">
                    <Link to={"/courses/" + course.id}>
                        <img src={arrow} alt="" />
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default CourseList;
