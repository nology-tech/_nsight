import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topcards from "../../components/topcards/topcards";
import TopHeader from "../../components/topheader/topheader";
import CourseFilter from "../courses/coursefilter/coursefilter";
import "./dummyPage.scss";
// import courses from "../../assets/data/coursedata";

const DummyPage = (props) => {
    const { courseId } = useParams();
    const {course, key} = props;
    // const [course, setCourse] = useState("");
    const [courseID, setCourseID] = useState([]);
    const fetchCourseID = () => {
        fetch(`http://localhost:8080/courses/${courseId}`)
        .then(response => response.json())
        .then(jsonResponse => setCourseID(jsonResponse))
        .catch(err => console.log("err"))};
        useEffect(() => {fetchCourseID()}, [])
    // useEffect(() => {
    //     const foundCourse = courseID.find(
    //         (course) => course.id === Number(courseId)
    //     );
    //     setCourseID(foundCourse);
    // }, [courseId]);

    return (
        <div className="coursedetails__main">
            <TopHeader title="Courses"><CourseFilter/></TopHeader>
            <Topcards courseID ={courseID}/>
            {/* <h2>{courseID.courseName}</h2> */}
        </div>
    );
};
export default DummyPage;