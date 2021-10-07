import React from "react";
import "./selfcouselist.scss";
import arrow from "../../../assets/icons/chevron-more.svg";
import { Link } from "react-router-dom";

const SelfCourseList = (props) => {
    const { selfCourse } = props;

    return (
        <>
            <div className="selfcourse">
                <div className="container">
                    <div className="row all tags">
                        <div className="col">
                            <h5>{selfCourse.name}</h5>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">
                                {selfCourse.numberEnrolled}
                            </p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">
                                {selfCourse.numberCompleted}
                            </p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">
                                {selfCourse.courseLead}
                            </p>
                        </div>
                        <div className="col">
                            <p className="selfcourse__tag">
                                {selfCourse.percentageEmployed}
                            </p>
                        </div>
                        <div className="col-md-1 ms-auto">
                            <Link to={"/courses/" + selfCourse.id}>
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SelfCourseList;
