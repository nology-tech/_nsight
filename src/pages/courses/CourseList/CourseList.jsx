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
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h5>{course.name}</h5>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">
                            {course.numberEnrolled}
                        </p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">
                            {course.percentageEmployed}
                        </p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.courseLead}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.courseStart}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">
                            {course.courseCompletion}
                        </p>
                    </div>
                    <div class="col">
                        <div className="stats">
                            <li style={{ color: statColour }}>{status}</li>
                        </div>
                    </div>
                    <div class="col-md-1 ms-auto">
                        <Link to={"/courses/" + course.id}>
                            <img src={arrow} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseList;
