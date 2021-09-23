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
            <h1 className="navbar_header">_n</h1>
            <div className="row navbar__item justify-content-start">
                { !houseState && <Link to="/" className="col" onMouseEnter={handleDashboardEnter}><img src={house} alt="" />Dashboard</Link>}
                { houseState && <Link to="/" className="col" onMouseLeave={handleDashboardLeave}><img src={houseonhover} alt="" />Dashboard</Link>}
            </div>
            <div className="row navbar__item justify-content-start">
                { !bookState && <Link to="/courses" className="col" onMouseEnter={handleCoursesEnter}><img src={book} alt="" className="smaller-image" />Courses</Link>}
                { bookState && <Link to="/courses" className="col" onMouseLeave={handleCoursesLeave}><img src={bookonhover} alt="" className="smaller-image" />Courses</Link>}
            </div>
            <div className="row navbar__item justify-content-start" >
                { !studentsState && <Link to="/students" className="col" onMouseEnter={handleStudentsEnter}><img src={students} alt="" className="" />Students</Link>}
                { studentsState && <Link to="/students" className="col" onMouseLeave={handleStudentsLeave}><img src={studentsonhover} alt="" className="" />Students</Link>}
            </div>
            <div className="row navbar__item text-left">
                { !medalsState && <Link to="/enrollment" className="col" onMouseEnter={handleEnrollmentEnter}><img src={medals} alt="" className="smaller-image" />Enrollment</Link>}
                { medalsState && <Link to="/enrollment" className="col" onMouseLeave={handleEnrollmentLeave}><img src={medalsonhover} alt="" className="smaller-image" />Enrollment</Link>}
            </div>
            <div className="list-break-bottom"></div>
            <div className="row navbar__item text-left">
                { !nutState && <Link to="/settings" className="col" onMouseEnter={handleSettingsEnter}><img src={nut} alt="" className="smaller-image" />Settings</Link>}
                { nutState && <Link to="/settings" className="col" onMouseLeave={handleSettingsLeave}><img src={nutonhover} alt="" className="smaller-image" />Settings</Link>}
                {/* <a html="#" className="col"><img src={nut} alt="" className="smaller-image" />Settings</a> */}
                {/* <img src={nut} alt="" className="col-md-4" />
                <p className="col-md-8">Settings</p> */}
            </div>     
        </nav>
    )
}

export default Navbar
