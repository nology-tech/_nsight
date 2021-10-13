import React from "react";
import "./coursefilter.scss";

const CourseFilter = (props) => {
    const { fullTime, setFullTime, selfPaced, setSelfPaced } = props;

    const All = () => {
        setSelfPaced(true);
        setFullTime(true);
    };

    const FullTime = (event) => {
        event.preventDefault();
        setSelfPaced(false);
        setFullTime(true);
    };

    const SelfPaced = (event) => {
        event.preventDefault();
        setFullTime(false);
        setSelfPaced(true);
    };

    const Coporate = () => {};

    return (
        <div className="coursefilter">
            <nav className="coursefilter__nav">
                <ul className="coursefilter__nav-list">
                    <li
                        onClick={All}
                        href=""
                        className={
                            selfPaced === true && fullTime === true
                                ? "underLineStyled coursefilter__nav-list-tag"
                                : "coursefilter__nav-list-tag"
                        }
                    >
                        All
                    </li>
                    <li
                        onClick={FullTime}
                        href=""
                        className={
                            selfPaced === false && fullTime === true
                                ? "underLineStyled coursefilter__nav-list-tag"
                                : "coursefilter__nav-list-tag"
                        }
                    >
                        Full-time
                    </li>
                    <li
                        onClick={SelfPaced}
                        href=""
                        className={
                            selfPaced === true && fullTime === false
                                ? "underLineStyled coursefilter__nav-list-tag"
                                : "coursefilter__nav-list-tag"
                        }
                    >
                        Self-Paced
                    </li>
                    <li
                        onClick={Coporate}
                        href=""
                        className="coursefilter__nav-list-tag"
                    >
                        Corporate
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CourseFilter;
