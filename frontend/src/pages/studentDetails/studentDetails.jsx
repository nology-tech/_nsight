import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentIndex from "../students/studentIndex/studentIndex";
import TopHeader from "../../components/topheader/topheader";
import "./studentDetails.scss";
import StudentCard from "../../components/studentCard/studentCard";

const StudentDetails = (props) => {
    const { studentId } = useParams();
    const [student, setStudent] = useState("");

    const fetchStudents = async () => {
        const response = await fetch(`http://localhost:8080/students/${studentId}`);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    };

    useEffect(async () => {
        setStudent(await fetchStudents());
    }, []);

    return (
<div className="main-student">
            <TopHeader title={`${student.first_name} ${student.last_name}`} buttonText="+  Edit" />
            <StudentCard student={student} />
            <StudentIndex />
        </div>
    );
};

export default StudentDetails;
