import React from "react";
import "./selfcouselist.scss";
import arrow from "../../../assets/icons/chevron-more.svg";
import { Link } from "react-router-dom";

const SelfCourseList = (props) => {
    const { selfCourse } = props;

    return (
        <>
            <div className="selfcourse">
                    <div className="row all tags w-100">
                        <div className="col-2">
                            <p className="selfcourse__name">{selfCourse.courseName}</p>
                        </div>
                        <div className="col-2">
                            <p className="selfcourse__tag">{selfCourse.numberEnrolled}</p>
                        </div>
                        <div className="col-2">
                            <p className="selfcourse__tag">{selfCourse.numberCompleted}</p>
                        </div>
                        <div className="col-3">
                            <p className="selfcourse__tag">{selfCourse.courseLead}</p>
                        </div>
                        <div className="col-2">
                            <p className="selfcourse__tag">{selfCourse.percentageEmployed}</p>
                        </div>
                        <div className="col-1">
                        <Link to={"/courses/" + selfCourse.id}>
                            <img src={arrow} alt="" />
                        </Link>
                        </div>
                    </div>
            </div>
        </>
    );
};
export default SelfCourseList;
