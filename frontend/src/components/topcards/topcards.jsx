import React from "react";
import "./topcards.scss";

const Topcards = (props) => {
  const { courseID } = props;
  return (
    <div className="coursedetails">
      <div className="container p-5">
        <h2 className="header">Overview</h2>
        <div className="row justify-content-between">
          <div className="col-3 card">
            <p>{courseID.courseName}</p>
          </div>
          <div className="col-3 card">
            <h3>Course Description</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident necessitatibus vel corporis delectus autem illo ipsa minus totam. Nam vero iure quo placeat quos asperiores quasi magni fugiat ab nostrum.</p>
            <hr className="coursedetails__line" />
            <div className="row justify-content-between">
            <p>Cohort Size: <p>{courseID.numberEnrolled}</p></p>
            </div>
            <div className="row justify-content-between">
            <p>Course Start Date: {courseID.courseStart?.toString().substring(0, 10)}</p>
            </div>
            <div className="row">
            <p>Course Completion: {courseID.courseCompletion?.toString().substring(0, 10)}</p>
            </div>
            <div className="row">
            <p>Course Lead: {courseID.courseLead}</p>
            </div>
          </div>
          <div className="col-3 card">{courseID.percentageEmployed}</div>
        </div>
      </div>
    </div>
  );
};

export default Topcards;
// coursedetails
// donut chart
