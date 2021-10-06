import React from 'react'
import './enrollment.scss'
import enrollmentData from "../../assets/data/enrollment-data";
import EnrollmentList from "../../components/enrollmentList/enrollmentList"
import TopHeader from '../../components/topheader/topheader';

const Enrollment = () => {

    return (
        <div className="enrollment-container">
            <TopHeader title="Enrollments"/>
            <div className="enrollment-list">
                <EnrollmentList enrollmentData={enrollmentData} />
            </div>
        </div>
    )
}

export default Enrollment
