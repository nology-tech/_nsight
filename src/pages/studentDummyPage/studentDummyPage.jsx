import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import students from "../../assets/data/student-data";

const StudentDummyPage = (props) => {
    const { studentId } = useParams();
    const [student, setStudent] = useState("");

    useEffect(() => {
        const foundStudent = students.find(
            (student) => student.id === Number(studentId)
        );
        setStudent(foundStudent);
    }, [studentId]);

    return (
        <>
            <h1>Hello there</h1>
            <h2>{student.first_name}</h2>
        </>
    );
};

export default StudentDummyPage;
