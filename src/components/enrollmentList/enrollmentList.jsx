import React from "react";
import "./enrollmentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg"

const EnrollmentList = (props) => {
    const { enrollmentData } = props;

    const intakeDisplay = enrollmentData.map((intake, i) => {
        return (
            <>
                <h1>{intake.intakeName}</h1>
                {intake.students.map((student) => {
                    let employed = "NO";
                    if (student.employed) {
                        employed = "YES"
                    }
                    return (
                        <div class="row">
                            <div class="col">
                                <p>{student.first_name}</p>
                            </div>
                            <div class="col">
                                <p>{student.last_name}</p>
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
    });

    return <div>{intakeDisplay}</div>;
};

export default EnrollmentList;
