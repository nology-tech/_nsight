import "./studentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg";
import { Link } from "react-router-dom";

const StudentList = (props) => {
    const { studentData } = props;

    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };

    const studentDisplay = studentData.map((student) => {
        let employed = "NO";
        if (student.employed) {
            employed = "YES";
        }

        return (
            <Link to={"/students/" + student.id} style={linkStyle}>
            <div className="row student-list" key={student.id}>
                <div className="col-2">
                    <h5>
                        {student.first_name} {student.last_name}
                    </h5>
                </div>
                <div className="col-2">
                    <p className="student-list__data">{student.email}</p>
                </div>
                <div className="col-2">
                    <p className="student-list__data">
                        {student.mobile_number}
                    </p>
                </div>
                <div className="col-2">
                    <p className="student-list__data">{student.type}</p>
                </div>
                <div className="col-1">
                    <p className="student-list__data">{employed}</p>
                </div>
                <div className="col-2">
                    <p className="student-list__data">{student.course_name}</p>
                </div>
                <div className="col-1">
                        <img src={moreInfo} alt="more student info" />
                </div>
            </div>
            </Link>
        );
    });

    return (
        <div className="container">
            <div className="row students">
                <div className="col-2">
                    <p>Student Name</p>
                </div>
                <div className="col-2">
                    <p>Email Address</p>
                </div>
                <div className="col-2">
                    <p>Mobile Number</p>
                </div>
                <div className="col-2">
                    <p>Consumer/Consultant</p>
                </div>
                <div className="col-1">
                    <p>Employed</p>
                </div>
                <div className="col-2">
                    <p>Course Name</p>
                </div>
                <div className="col-1">
                </div>
            </div>
            {studentDisplay}
        </div>
    );
};

export default StudentList;
