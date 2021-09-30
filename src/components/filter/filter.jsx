import React, { useState } from 'react'
import "./filter.scss"
import filterIcon from "../../assets/icons/filter.svg"

const Filter = (props) => {

    const {courses, filterByCourseName } = props;

    const [filter, setFilter] = useState(false);

    let filterClass = "filter-list";

    const distinctCourseNames = Object.entries(courses).map(course => {
        return (
            <>
                <li className="filter-item">
                    <input id={course[0]} type="checkbox" value={course[0]} checked={course[1]} onChange={filterByCourseName}/>
                    <label htmlFor={course[0]}>{course[0]}</label>
                </li>
            </>
        );
    });

    const toggleFilter = (e) => {
        setFilter(!filter);
        if (filter) {
            filterClass += " filter-open";
        }
    }

    return (
        <div>
            <div className="filter-heading" onClick={toggleFilter}>
                <img src={filterIcon}/>
                <p>Filters</p>
            </div>
            <ul className={filterClass}>
                {distinctCourseNames}
            </ul>
        </div>
    )
}

export default Filter;
