import "./studentList.scss";
import moreInfo from "../../assets/icons/chevron-more.svg"

const StudentList = (props) => {
    const { studentData } = props;

    const studentDisplay = studentData.map(student => {
        let employed = "NO";
        if (student.employed) {
            employed = "YES"
        }

        return <div class="row">
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
                    <div class="col">
                        {employed}
                    </div>
                    <div class="col">
                        <p>{student.course_name}</p>
                    </div>
                    <div class="col">
                        <img src={moreInfo} alt="more info chevron" />
                    </div>
                </div>
    });

    return (
            <div class="student-container">
                <div class="row">
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
                {studentDisplay}
            </div>
    );
};

export default StudentList;
