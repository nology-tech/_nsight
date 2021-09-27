import React from 'react'
import "./filter.scss"

const Filter = (props) => {

    const { studentData, filterByCourseName } = props;

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const courseNames = studentData.map(student => student.course_name);

    const uniqueCourseNames = courseNames.filter(unique);

    const distinctCourseNames = uniqueCourseNames.map(courseName => {
        return (
            <>
                <input id={courseName} type="checkbox" value={courseName} onChange={filterByCourseName}/>
                <label htmlFor={courseName}>{courseName}</label>
            </>
        );
    });

    return (
        <div>
            {distinctCourseNames}
        </div>
    )
}

export default Filter
