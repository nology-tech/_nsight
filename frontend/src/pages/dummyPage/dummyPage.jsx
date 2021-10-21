import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topcards from "../../components/topcards/topcards";
import TopHeader from "../../components/topheader/topheader";
import "./dummyPage.scss";
import Dropdown from "../../components/dropdown/dropdown";
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
            <TopHeader title="Courses" buttonText="+  Create">
            </TopHeader>
            <Topcards courseID ={courseID}/>
        </div>
    );
};
export default DummyPage;