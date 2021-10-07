import React from 'react'
import "./filter.scss"

const Filter = (props) => {

    const {courses, filterByCourseName } = props;

    const distinctCourseNames = Object.entries(courses).map(course => {
        return (
            <>
                <input id={course[0]} type="checkbox" value={course[0]} checked={course[1]} onChange={filterByCourseName}/>
                <label htmlFor={course[0]}>{course[0]}</label>
            </>
        );
    });

    return (
        <div>
            {distinctCourseNames}
        </div>
    )
}

export default Filter;
