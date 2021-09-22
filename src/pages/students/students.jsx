import "./students.scss";
import students from "../../assets/data/student-data";
import moreInfo from "../../assets/icons/chevron-more.svg";
import Searchbox from "../../components/searchbox/searchbox";
import { useState } from "react";


const Students = () => {

    const [searchTerm, setSearchTerm] = useState("");

    // key in search term
    // onchange 
    // sanitize input and data file (same casing)
    // split the search term for the first and last name
    // check through the data for the first name, last name given the search term
    // display relevant student

    const handleSearch = (e) => {
        const sanitiseInput = e.target.value.toLowerCase();
        const studentSearch = students.filter(student => {
            const sanitisedStudentName = student.first_name.toLowerCase();
            return sanitisedStudentName.includes(sanitiseInput);
        })
        setSearchTerm(studentSearch)
    }


    const studentData = students.map(student => {
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
    })

    return (
        <>
            <div className="list-title">
                <h3 className="list-title__heading">Student List</h3>
                <Searchbox handleSearch={handleSearch} />
            </div>
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
                {studentData}
            </div>
        </>
    )
}

export default Students;
