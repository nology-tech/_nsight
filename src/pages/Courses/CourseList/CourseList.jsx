import React from 'react'
import "./CourseList.scss"
import arrow from "../../../assets/icons/chevron-more.svg";

const CourseList = (props) => {
    const {course} = props

    let status = "";
    let statColour = "";
    if(course.status === false){
        status = "Inactive"
        statColour = "red";

    }else {
        status = "Active"
        statColour = "green"
    }
    return (
        <div className="courselist">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h5>{course.name}</h5>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.numberEnrolled}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.percentageEmployed}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.courseLead}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.courseStart}</p>
                    </div>
                    <div class="col">
                        <p className="courselist__tag">{course.courseCompletion}</p>
                    </div>
                    <div class="col">
                        <div>
                            <p style={{color:statColour}}>{status}</p>
                        </div>
                    </div>
                    <div class="col">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList
