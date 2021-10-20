import React from "react";
import "./studentCard.scss";
import placeholderImage from "../../assets/images/beer.jpg";
import { Link } from "react-router-dom";

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
        <div className="studentDetails">
            <div className="container p-5">
                <h2 className="header">Overview</h2>
                <div className="row justify-content-between">
                    <div className="col-3 card">
                        <div className="studentDetails__student">
                            <img className="studentDetails__img" src={placeholderImage} alt="student image" />
                            <h2>{`${student.first_name} ${student.last_name}`}</h2>
                            <p className="information">{`${student.course?.courseName} Student`}</p>
                            <Link to={"/students/" + student.id + "/edit/"}>Edit Student</Link>
                        </div>
                    </div>
                    <div className="col-3 card">
                        <h3>Contact Details</h3>
                        <div className="row justify-content-between">
                            <p>Date of Birth:</p>
                            <p className="information">{studentDobFormat}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Email address:</p>
                            <p className="information">{student.email}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Mobile number:</p>
                            <p className="information">{student.mobile_number}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Consumer/Consultant:</p>
                            <p className="information">{student.type}</p>
                        </div>
                    </div>
                    <div className="col-3 card">
                        <h3>Employment Details</h3>
                        <div className="row justify-content-between">
                            <p>Employment Status:</p>
                            <p className="information">{employed}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Employer:</p>
                            <p className="information">{student.employer}</p>
                        </div>
                        <div className="row justify-content-between">
                            <p>Job role:</p>
                            <p className="information">{student.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
