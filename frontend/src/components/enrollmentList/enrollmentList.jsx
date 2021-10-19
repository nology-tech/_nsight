import React from "react";
import "./enrollmentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg";

const EnrollmentList = (props) => {
    const { enrollmentData } = props;

    const cleanEnrollmentData = enrollmentData.reduce((arr, student) => {
        const foundObject = arr.find((enrollment) => enrollment.intakeName === student.course.courseName)

        if(foundObject) {
            foundObject.students.push(student);
        } else {
            const newObj = {
                id: student.course.id,
                intakeName: student.course.courseName,
                students: []
            };
            
            newObj.students.push(student);
            arr.push(newObj);
        }

        return arr;
    }, [])

    console.log(cleanEnrollmentData);

    const intakeDisplay = cleanEnrollmentData.map((intake, i) => {
        let isSelfPaced = "fullTime";
        if (intake.intakeName === "Self-paced") {
            isSelfPaced = "self-paced";
        }

        if (i !== 0) {
            return (
                <React.Fragment key={intake.id}>
                    <h1 className={isSelfPaced}>{intake.intakeName}</h1>

                    {intake.students.map((student) => {
                        let employed = "NO";
                        if (student.employed) {
                            employed = "YES";
                        }
                        return (
                            <div className="row student" key={student.id}>
                                <div className="col">
                                    <p>
                                        {student.first_name} {student.last_name}
                                    </p>
                                </div>
                                <div className="col">
                                    <p>{student.email}</p>
                                </div>
                                <div className="col">
                                    <p>{student.mobile_number}</p>
                                </div>
                                <div className="col">
                                    <p>{student.type}</p>
                                </div>
                                <div className="col">{employed}</div>
                                <div className="col">
                                    <p>{student.course_name}</p>
                                </div>
                                <div className="col">
                                    <img
                                        src={moreInfo}
                                        alt="more info chevron"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment key={intake.id}>
                    <h1 className={isSelfPaced}>{intake.intakeName}</h1>
                    <div className="row student student-container-headers">
                        <div className="col">
                            <p>Student Name</p>
                        </div>
                        <div className="col">
                            <p>Email Address</p>
                        </div>
                        <div className="col">
                            <p>Mobile Number</p>
                        </div>
                        <div className="col">
                            <p>Consumer/Consultant</p>
                        </div>
                        <div className="col">
                            <p>Employed</p>
                        </div>
                        <div className="col">
                            <p>Course Name</p>
                        </div>
                        <div className="col"></div>
                    </div>

                    {intake.students.map((student) => {
                        let employed = "NO";
                        if (student.employed) {
                            employed = "YES";
                        }
                        return (
                            <div className="row student" key={student.id}>
                                <div className="col">
                                    <p>
                                        {student.first_name} {student.last_name}
                                    </p>
                                </div>
                                <div className="col">
                                    <p>{student.email}</p>
                                </div>
                                <div className="col">
                                    <p>{student.mobile_number}</p>
                                </div>
                                <div className="col">
                                    <p>{student.type}</p>
                                </div>
                                <div className="col">{employed}</div>
                                <div className="col">
                                    <p>{student.course_name}</p>
                                </div>
                                <div className="col">
                                    <img
                                        src={moreInfo}
                                        alt="more info chevron"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </React.Fragment>
            );
        }
    });

    return <div>{intakeDisplay}</div>;
};

export default EnrollmentList;