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
                    <div class="col-lg">
                        <p>{student.first_name} {student.last_name}</p>
                    </div>
                    <div class="col-lg">
                        <p>{student.email}</p>
                    </div>
                    <div class="col-lg">
                        <p>{student.mobile_number}</p>
                    </div>
                    <div class="col-lg">
                        <p>{student.type}</p>
                    </div>
                    <div class="col-lg">
                        {employed}
                    </div>
                    <div class="col-lg">
                        <p>{student.course_name}</p>
                    </div>
                    <div class="col-lg">
                        <img src={moreInfo} alt="more info chevron" />
                    </div>
                </div>
    });

    return (
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <p>Student Name</p>
                    </div>
                    <div class="col-lg">
                        <p>Email Address</p>
                    </div>
                    <div class="col-lg">
                        <p>Mobile Number</p>
                    </div>
                    <div class="col-lg">
                        <p>Consumer/Consultant</p>
                    </div>
                    <div class="col-lg">
                        <p>Employed</p>
                    </div>
                    <div class="col-lg">
                        <p>Course Name</p>
                    </div>
                    <div class="col-lg">
                    </div>
                </div>
                {studentDisplay}
            </div>
    );
};

export default StudentList;
