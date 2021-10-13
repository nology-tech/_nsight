import React, { useState } from "react";
import "./navbar.scss";
import book from "../../assets/icons/book.svg";
import bookonhover from "../../assets/icons/bookonhover.svg";
import medals from "../../assets/icons/medals.svg";
import medalsonhover from "../../assets/icons/medalsonhover.svg";
import nut from "../../assets/icons/nut.svg";
import nutonhover from "../../assets/icons/nutonhover.svg";
import students from "../../assets/icons/students.svg";
import studentsonhover from "../../assets/icons/studentsonhover.svg";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/_nology.png";

const Navbar = () => {
    const [bookState, setBookState] = useState(false);
    const [medalsState, setMedalsState] = useState(false);
    const [studentsState, setStudentsState] = useState(false);
    const [nutState, setNutState] = useState(false);

    const handleCoursesClick = () => {
        handleClearActiveStatus();
        setBookState(true);
    };

    const handleStudentsClick = () => {
        handleClearActiveStatus();
        setStudentsState(true);
    };

    const handleEnrollmentClick = () => {
        handleClearActiveStatus();
        setMedalsState(true);
    };

    const handleSettingsClick = () => {
        handleClearActiveStatus();
        setNutState(true);
    };

    const handleClearActiveStatus = () => {
        if (bookState) {
            setBookState(false);
        } else if (studentsState) {
            setStudentsState(false);
        } else if (medalsState) {
            setMedalsState(false);
        } else if (nutState) {
            setNutState(false);
        }
    };

    return (
        <nav className="wrapper">
            <img src={logo} className="logo" alt="logo" />

            <div className="navbar container">
                <div className="list-break-bottom"></div>
                <div className="row navbar__item justify-content-start">
                    <NavLink
                        exact
                        to="/courses"
                        className="col"
                        onClick={handleCoursesClick}
                        activeClassName="active"
                    >
                        {" "}
                        {!bookState && (
                            <img
                                src={book}
                                alt="book"
                                className="smaller-image"
                            />
                        )}
                        {bookState && (
                            <img
                                src={bookonhover}
                                alt="bookonhover"
                                className="smaller-image"
                            />
                        )}
                        Courses
                    </NavLink>
                </div>
                <div className="row navbar__item justify-content-start">
                    <NavLink
                        exact
                        to="/students"
                        className="col"
                        onClick={handleStudentsClick}
                        activeClassName="active"
                    >
                        {!studentsState && (
                            <img src={students} alt="students" className="" />
                        )}
                        {studentsState && (
                            <img
                                src={studentsonhover}
                                alt="studentsonhover"
                                className=""
                            />
                        )}
                        Students
                    </NavLink>
                </div>
                <div className="row navbar__item text-left">
                    <NavLink
                        exact
                        to="/enrollment"
                        className="col"
                        onClick={handleEnrollmentClick}
                        activeClassName="active"
                    >
                        {!medalsState && (
                            <img
                                src={medals}
                                alt="medals"
                                className="smaller-image"
                            />
                        )}
                        {medalsState && (
                            <img
                                src={medalsonhover}
                                alt="medalsonhover"
                                className="smaller-image"
                            />
                        )}
                        Enrollment
                    </NavLink>
                </div>
                <div className="list-break-bottom"></div>
                <div className="row navbar__item text-left">
                    <NavLink
                        exact
                        to="/settings"
                        className="col"
                        onClick={handleSettingsClick}
                        activeClassName="active"
                    >
                        {!nutState && (
                            <img
                                src={nut}
                                alt="nut"
                                className="smaller-image"
                            />
                        )}
                        {nutState && (
                            <img
                                src={nutonhover}
                                alt="nutonhover"
                                className="smaller-image"
                            />
                        )}
                        Settings
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
