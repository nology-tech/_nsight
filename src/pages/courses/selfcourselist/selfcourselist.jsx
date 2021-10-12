import React from "react";
import "./selfcouselist.scss";
import arrow from "../../../assets/icons/chevron-more.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const SelfCourseList = (props) => {
    const { selfCourse, course } = props;
    
    return(
        <>
            <div className="selfcourse">
                {/* <div className="container"> */}
                    <div class="row all tags w-100">
                        <div class="col-2">
                            <p className="selfcourse__name">{selfCourse.name}</p>
                        </div>
                        <div class="col-2">
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
                        <div class="col-1">
                        <Link to={"/courses/" + selfCourse.id}>
                            <img src={arrow} alt="" />
                        </Link>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default SelfCourseList