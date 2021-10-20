import React from "react";
import "./topcards.scss";
import image from "../../assets/images/portfolio.jpeg";
import DonutChart from 'react-d3-donut';

const Topcards = (props) => {
  const { courseID } = props;
  let status = "";
  let statColour = "";
  if (courseID.status === false) {
      status = "Inactive";
      statColour = "red";
  } else {
      status = "Active";
      statColour = "green";
  }
  const data = [{
    count: courseID.percentageEmployed,       // Value of the property. Required.
    color: "#2FF596",  // Color code for the pie's color. Required.
    },
    {
      count: 100 - courseID.percentageEmployed,       // Value of the property. Required.
      color: "#31B073",  // Color code for the pie's color. Required.
      }];
  return (
    
    <div className="coursedetails">
      <div className="container p-5">
        <h2 className="header">Overview</h2>
        <div className="row justify-content-between w-100">
          <div className="col-3 align-items-center card">
            <img src={image} alt="" className="coursedetails__img"/>
            <h3>{courseID.courseName}</h3>
            <p className="coursedetails__tags">Full-Time Bootcamp</p>
            <li style={{ color: statColour }}>{status}</li>
          </div>
          <div className="col-3 card">
            <h3 className="coursedetails__header">Course Description</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident necessitatibus vel corporis delectus autem illo ipsa minus totam. Nam vero iure quo placeat quos asperiores quasi magni fugiat ab nostrum.</p>
            <hr className="coursedetails__line" />
            <div className="row justify-content-between">
            <div className="col"><p>Cohort Size:</p></div> 
            <div className="col"><p className="coursedetails__tags">{courseID.numberEnrolled}</p></div>
            </div>
            <div className="row justify-content-between">
            <div className="col"><p>Course Start Date: </p></div> 
            <div className="col"><p className="coursedetails__tags">{courseID.courseStart?.toString().substring(0, 10)}</p></div>
            </div>
            <div className="row justify-content-between">
            <div className="col"><p>Course Completion: </p></div> 
            <div className="col"><p className="coursedetails__tags">{courseID.courseCompletion?.toString().substring(0, 10)}</p></div>
            </div>
            <div className="row justify-content-between">
            <div className="col"><p>Course Lead: </p></div> 
            <div className="col"><p className="coursedetails__tags">{courseID.courseLead}</p></div>
            </div>
          </div>
          <div className="col-3 card">
          <h3 className="coursedetails__header">Employed Post-course</h3>
            <DonutChart
              innerRadius={70}
              outerRadius={100}
              transition={true}
              svgClass="example6"
              pieClass="pie6"
              displayTooltip={false}
              strokeWidth={3}
              data={data} /> 
              //rotate
          {courseID.percentageEmployed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topcards;
// coursedetails
// donut chart
