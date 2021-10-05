import React from 'react'
import './enrollment.scss'
import enrollmentData from "../../assets/data/enrollment-data";
import EnrollmentList from "../../components/enrollmentList/enrollmentList"

const Enrollment = () => {

    // console.log(enrollmentData[0].mariana.students[0].first_name);

    return (
        <div className="enrollment-list">
            <EnrollmentList enrollmentData={enrollmentData} />
        </div>
    )
}

export default Enrollment
