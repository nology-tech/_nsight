import React from "react";
import "./studentCard.scss";

const StudentCard = (props) => {
    const {student} = props;

    let employed = "NOT YET EMPLOYED";
    if (student.employed) {
        employed = "EMPLOYED";
    }

    const studentDob = new Date(student.dob);
    let dd = studentDob.getDate();
    let mm = studentDob.getMonth() + 1;
    const yyyy = studentDob.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }

    const studentDobFormat = dd + "/" + mm + "/" + yyyy;

    return (
        <div className="coursedetails">
            <div className="container p-5">
                <h2 className="header">Overview</h2>
                <div className="row justify-content-between">
                    <div className="col-3 card">
                        <h2>{`${student.first_name} ${student.last_name}`}</h2>
                        <p>{`${student.course?.courseName} Student`}</p>
                    </div>
                    <div className="col-3 card">
                        <h3>Contact Details</h3>
                        <div className="row justify-content-between">
                            <p>Date of Birth:</p>
                            <p>{studentDobFormat}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Email address:</p>
                            <p>{student.email}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Mobile number:</p>
                            <p>{student.mobile_number}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Consumer/Consultant:</p>
                            <p>{student.type}</p>
                        </div>
                    </div>
                    <div className="col-3 card">
                        <h3>Employment Details</h3>
                        <div className="row justify-content-between">
                            <p>Employment Status:</p>
                            <p>{employed}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Employer:</p>
                            <p>{student.employer}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Job role:</p>
                            <p>{student.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
