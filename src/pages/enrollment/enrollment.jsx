import React, { useEffect, useState } from 'react'
import './enrollment.scss'
import enrollmentData from "../../assets/data/enrollment-data";
import EnrollmentList from "../../components/enrollmentList/enrollmentList"
import TopHeader from '../../components/topheader/topheader';

const Enrollment = () => {

    const [filterIntakes, setFilterIntakes] = useState([]);
    const [enrollments, setEnrollments] = useState([]);


    const courseNames = enrollmentData.map((courses) => courses.intakeName);
    console.log(courseNames);

    const getEnrollments = () => {
        setEnrollments(enrollmentData);
    }

    useEffect(() => {
        getEnrollments();
    }, []);

    return (
        <div className="enrollment-container">
            <TopHeader title="Enrollments"/>
            <div className="enrollment-list">
                <EnrollmentList enrollmentData={enrollments} />
            </div>
        </div>
    )
}

export default Enrollment
