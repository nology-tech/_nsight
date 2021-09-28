import React , {useState} from 'react'
import "./coursefilter.scss"
import courses from "../../../assets/data/coursedata";
import CourseList from "../CourseList/CourseList";

const CourseFilter = (props) => {
    const {filteredCourseData, searchResults, setSearchResults, coursesData, handleFulltime } = props;


    const All = () => {

    }

    const FullTime = () => {
        // console.log("Full time")
      setSearchResults(filteredCourseData);
    }

    const SelfPaced = () => {

    }

    const Coporate = () => {

    }

    return (
        <div className="coursefilter">
            <nav className="coursefilter__nav">
                <ul className="coursefilter__nav-list">
                    <a onClick={All} href="" className="coursefilter__nav-list-tag">All</a>
                    <li onClick={FullTime} href="" className="coursefilter__nav-list-tag">Full-time</li>
                    <a onClick={SelfPaced} href="" className="coursefilter__nav-list-tag">Self-Paced</a>
                    <a onClick={Coporate} href="" className="coursefilter__nav-list-tag">Corporate</a>
                </ul>
            </nav>
        </div>
    )
}

export default CourseFilter;