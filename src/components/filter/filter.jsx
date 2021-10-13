import React, { useState } from "react";
import "./filter.scss";
import filterIcon from "../../assets/icons/filter.svg";

const Filter = (props) => {
    const { courses, filterByCourseName } = props;

    const [filter, setFilter] = useState(false);

    const distinctCourseNames = Object.entries(courses).map((course) => {
        return (
            <>
                <li className="filter-item">
                    <input
                        className="filter-item__checkbox"
                        id={course[0]}
                        type="checkbox"
                        value={course[0]}
                        checked={course[1]}
                        onChange={filterByCourseName}
                    />
                    <label htmlFor={course[0]}>{course[0]}</label>
                </li>
            </>
        );
    });

    const toggleFilter = (e) => {
        setFilter(!filter);
    };

    return (
        <div className="filter">
            <div className="filter-heading" onClick={toggleFilter}>
                <img src={filterIcon} alt="Filter magnifying glass" />
                <p className="filter-heading__word">Filters</p>
            </div>
            {filter && <ul className="filter-list">{distinctCourseNames}</ul>}
        </div>
    );
};

export default Filter;
