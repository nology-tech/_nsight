import React, { useState } from 'react'
import "./navbar.scss";
import book from "../../assets/icons/book.svg"
import bookonhover from "../../assets/icons/bookonhover.svg"
import medals from "../../assets/icons/medals.svg"
import medalsonhover from "../../assets/icons/medalsonhover.svg"
import nut from "../../assets/icons/nut.svg"
import nutonhover from "../../assets/icons/nutonhover.svg"
import students from "../../assets/icons/students.svg"
import studentsonhover from "../../assets/icons/studentsonhover.svg"
import house from "../../assets/icons/house.svg"
import houseonhover from "../../assets/icons/houseonhover.svg"
import { Link } from 'react-router-dom';
import logo from "../../assets/images/_nology.png"



const Navbar = () => {

    const [bookState, setBookState] = useState(false);
    const [houseState, setHouseState] = useState(false);
    const [medalsState, setMedalsState] = useState(false);
    const [studentsState, setStudentsState] = useState(false);
    const [nutState, setNutState] = useState(false);

    const handleCoursesEnter = () => {
        setBookState(true);
    }
    const handleCoursesLeave = () => {
        setBookState(false);
    }

    const handleDashboardEnter = () => {
        setHouseState(true);
    }
    const handleDashboardLeave = () => {
        setHouseState(false);
    }

    const handleStudentsEnter = () => {
        setStudentsState(true);
    }
    const handleStudentsLeave = () => {
        setStudentsState(false);
    }

    const handleEnrollmentEnter = () => {
        setMedalsState(true);
    }
    const handleEnrollmentLeave = () => {
        setMedalsState(false);
    }

    const handleSettingsEnter = () => {
        setNutState(true);
    }
    const handleSettingsLeave = () => {
        setNutState(false);
    }

    return (
        <nav className="navbar container">
            
            <img src={logo} className="logo" alt="" />

            <div className="list-break-bottom"></div>

            <div className="row navbar__item justify-content-start">
                <Link to="/" className="col" onMouseEnter={handleDashboardEnter} onMouseLeave={handleDashboardLeave}>{ !houseState && <img src={house} alt="" />}{ houseState && <img src={houseonhover} alt="" />}Dashboard</Link>
            </div>

            <div className="row navbar__item justify-content-start">
                <Link to="/courses" className="col" onMouseEnter={handleCoursesEnter} onMouseLeave={handleCoursesLeave}> { !bookState && <img src={book} alt="" className="smaller-image" />}{ bookState && <img src={bookonhover} alt="" className="smaller-image" />}Courses</Link>
            </div>

            <div className="row navbar__item justify-content-start" >
                <Link to="/students" className="col" onMouseEnter={handleStudentsEnter} onMouseLeave={handleStudentsLeave}>{ !studentsState && <img src={students} alt="" className="" />}{ studentsState && <img src={studentsonhover} alt="" className="" />}Students</Link>
            </div>

            <div className="row navbar__item text-left">
                <Link to="/enrollment" className="col" onMouseEnter={handleEnrollmentEnter} onMouseLeave={handleEnrollmentLeave}>{ !medalsState && <img src={medals} alt="" className="smaller-image" />}{ medalsState && <img src={medalsonhover} alt="" className="smaller-image" />}Enrollment</Link>
            </div>

            <div className="list-break-bottom"></div>

            <div className="row navbar__item text-left">
                <Link to="/settings" className="col" onMouseEnter={handleSettingsEnter} onMouseLeave={handleSettingsLeave}>{ !nutState && <img src={nut} alt="" className="smaller-image" />}{ nutState && <img src={nutonhover} alt="" className="smaller-image" />}Settings</Link>
            </div>     
        </nav>
    )
}

export default Navbar
