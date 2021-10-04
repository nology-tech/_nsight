import React , {useState} from 'react'
import "./coursefilter.scss"
import courses from "../../../assets/data/coursedata";
import CourseList from "../CourseList/CourseList";

const CourseFilter = (props) => {
    const {fullTime,setFullTime, selfPaced, setSelfPaced} = props;

    //
    // if(){
    //    let underline = "#724BCB";
    //     className="coursefilter__nav-list-tag"
    // }

    const All = () => {
        setSelfPaced(true);
        setFullTime(true);
    }

    const FullTime = (event) => {
        event.preventDefault();
        setSelfPaced(false)
        setFullTime(true);
    }

    const SelfPaced = (event) => {
        event.preventDefault();
        setFullTime(false)
        setSelfPaced(true)
    }

    const Coporate = () => {

    }

    return (
        <div className="coursefilter">
            <nav className="coursefilter__nav">
                <ul className="coursefilter__nav-list">
                    <a onClick={All} href="" className={(selfPaced && fullTime) === true ? "underLineStyled coursefilter__nav-list-tag" : "coursefilter__nav-list-tag"}>All</a>
                    <a onClick={FullTime} href="" className={selfPaced === false && fullTime === true ? "underLineStyled coursefilter__nav-list-tag" : "coursefilter__nav-list-tag"}>Full-time</a>
                    <a onClick={SelfPaced} href="" className={selfPaced === false && fullTime === true ? "underLineStyled coursefilter__nav-list-tag" : "coursefilter__nav-list-tag"}>Self-Paced</a>
                    <a onClick={Coporate} href="" className="coursefilter__nav-list-tag">Corporate</a>
                </ul>
            </nav>
        </div>
    )

}

export default CourseFilter;