import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courses from "../../assets/data/coursedata";

const DummyPage = (props) => {
    const { courseId } = useParams();
    // const {course} = props;
    const [course, setCourse] = useState("");

    useEffect(() => {
        const foundCourse = courses.find(
            (course) => course.id === Number(courseId)
        );
        setCourse(foundCourse);
    }, [courseId]);

    return (
        <>
            <h1>Hello world</h1>
            <h2>{course.name}</h2>
        </>
    );
};
export default DummyPage;
