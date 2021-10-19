import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <>
            <h1>Hello world</h1>
            <h2>{courseID.courseName}</h2>
        </>
    );
};
export default DummyPage;