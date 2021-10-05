import React from 'react'
import "./enrollmentList.scss";

const EnrollmentList = (props) => {
  const { enrollmentData } = props;
  let i = 0;

  const intakeDisplay = enrollmentData.map(intake => {
    i += 1;

    return <>
      <h1>{Object.keys(intake)}</h1>


      <div class="row">
        <div class="col">
            <p>{intake.student.first_name} {intakestudent.last_name}</p>
        </div>
        {/* <div class="col">
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
        </div> */}
    </div>

      </>
  })


  return (
    <div>
      {intakeDisplay}
    </div>
  )
}

export default EnrollmentList
