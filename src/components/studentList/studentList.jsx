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
            <div class="row student-list">
                <div class="col">
                    <h5>
                        {student.first_name} {student.last_name}
                    </h5>
                </div>
                <div class="col">
                    <p className="student-list__data">{student.email}</p>
                </div>
                <div class="col">
                    <p className="student-list__data">
                        {student.mobile_number}
                    </p>
                </div>
                <div class="col">
                    <p className="student-list__data">{student.type}</p>
                </div>
                <div class="col">
                    <p className="student-list__data">{employed}</p>
                </div>
                <div class="col">
                    <p className="student-list__data">{student.course_name}</p>
                </div>
                <div class="col">
                    <Link to={"/students/" + student.id}>
                        <img src={moreInfo} alt="more student info" />
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div class="container">
            <div class="row students">
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
                <div class="col"></div>
            </div>
            {studentDisplay}
        </div>
    );
};

export default StudentList;
