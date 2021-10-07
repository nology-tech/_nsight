import "./studentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg";
import { Link } from "react-router-dom";

const StudentList = (props) => {
    const { studentData } = props;

    const studentDisplay = studentData.map((student) => {
        let employed = "NO";
        if (student.employed) {
            employed = "YES";
        }

        return (
            <div className="row student-list" key={student.id}>
                <div className="col">
                    <h5>
                        {student.first_name} {student.last_name}
                    </h5>
                </div>
                <div className="col">
                    <p className="student-list__data">{student.email}</p>
                </div>
                <div className="col">
                    <p className="student-list__data">
                        {student.mobile_number}
                    </p>
                </div>
                <div className="col">
                    <p className="student-list__data">{student.type}</p>
                </div>
                <div className="col">
                    <p className="student-list__data">{employed}</p>
                </div>
                <div className="col">
                    <p className="student-list__data">{student.course_name}</p>
                </div>
                <div className="col">
                    <Link to={"/students/" + student.id}>
                        <img src={moreInfo} alt="more student info" />
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row students">
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
            {studentDisplay}
        </div>
    );
};

export default StudentList;
