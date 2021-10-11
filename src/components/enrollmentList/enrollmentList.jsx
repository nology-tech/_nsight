import React from "react";
import "./enrollmentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg"

const EnrollmentList = (props) => {
    const { enrollmentData } = props;

    const intakeDisplay = enrollmentData.map((intake, i) => {

        let isSelfPaced = "fullTime";
        if (intake.intakeName === "Self-paced") {
            isSelfPaced = "self-paced";
        }



        if (i !== 0) {
            return (
                <>
                    <h3 className={isSelfPaced}>{intake.intakeName}</h3>
                    
                    {intake.students.map((student) => {
                        let employed = "NO";
                        if (student.employed) {
                            employed = "YES"
                        }
                        return (
                            <div class="row student">
                                <div class="col">
                                    <p>{student.first_name} {student.last_name}</p>
                                </div>
                                <div class="col">
                                    <p>{student.email}</p>
                                </div>
                                <div class="col">
                                    <p>{student.mobile_number}</p>
                                </div>
                                <div class="col">
                                    <p>{student.type}</p>
                                </div>
                                <div class="col">{employed}</div>
                                <div class="col">
                                    <p>{student.course_name}</p>
                                </div>
                                <div class="col">
                                    <img src={moreInfo} alt="more info chevron" />
                                </div>
                            </div>
                        );
                    })}
                </>
            );
        } else {
            return (
                <>
                <h3 className={isSelfPaced}>{intake.intakeName}</h3>                                    
                    <div class="row student student-container-headers">
                        <div class="col">
                            <p>Student Name</p>
                        </div>
                        <div class="col">
                            <p>Email Address</p>
                        </div>
                        <div class="col">
                            <p>Mobile Number</p>
                        </div>
                        <div class="col">
                            <p>Consumer/Consultant</p>
                        </div>
                        <div class="col">
                            <p>Employed</p>
                        </div>
                        <div class="col">
                            <p>Course Name</p>
                        </div>
                        <div class="col">

                        </div>
                    </div>

                    {intake.students.map((student) => {
                        let employed = "NO";
                        if (student.employed) {
                            employed = "YES"
                        }
                        return (
                            <div class="row student">
                                <div class="col">
                                    <p>{student.first_name} {student.last_name}</p>
                                </div>
                                <div class="col">
                                    <p>{student.email}</p>
                                </div>
                                <div class="col">
                                    <p>{student.mobile_number}</p>
                                </div>
                                <div class="col">
                                    <p>{student.type}</p>
                                </div>
                                <div class="col">{employed}</div>
                                <div class="col">
                                    <p>{student.course_name}</p>
                                </div>
                                <div class="col">
                                    <img src={moreInfo} alt="more info chevron" />
                                </div>
                            </div>
                        );
                    })}
                </>
            );
        }
    });

    return <div>{intakeDisplay}</div>;
    
};

export default EnrollmentList;

