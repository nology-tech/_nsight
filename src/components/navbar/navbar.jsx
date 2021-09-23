import React, { useState } from 'react'
import "./navbar.scss";
import book from "../../assets/icons/book.svg"
import bookonhover from "../../assets/icons/bookonhover.svg"
import medals from "../../assets/icons/medals.svg"
import nut from "../../assets/icons/nut.svg"
import students from "../../assets/icons/students.svg"
import house from "../../assets/icons/house.svg"
import houseonhover from "../../assets/icons/houseonhover.svg"
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [bookState, setBookState] = useState(false);
    const [houseState, setHouseState] = useState(false);


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

    return (
        <nav className="navbar container">

            <h1 className="navbar_header">_n</h1>

            <div className="row navbar__item justify-content-start">

                { !houseState && <Link to="/" className="col" onMouseEnter={handleDashboardEnter}><img src={house} alt="" />Dashboard</Link>}
                { houseState && <Link to="/" className="col" onMouseLeave={handleDashboardLeave}><img src={houseonhover} alt="" />Dashboard</Link>}
                {/* <a html="https://www.google.com" className="col"><img src={house} alt="" />Dashboard</a> */}
                {/* <p className="col">Dashboard</p> */}
            </div>

            <div className="row navbar__item justify-content-start">

                { !bookState && <Link to="/courses" className="col" onMouseEnter={handleCoursesEnter}><img src={book} alt="" className="smaller-image" />Courses</Link>}
                { bookState && <Link to="/courses" className="col" onMouseLeave={handleCoursesLeave}><img src={bookonhover} alt="" className="smaller-image" />Courses</Link>}
                {/* <a html="#" className="col"><img src={book} alt="" className="smaller-image" />Courses</a> */}
                
                {/* <p className="col">Courses</p> */}
            </div>

            <div className="row navbar__item justify-content-start" >

                <Link to="/students" className="col"><img src={students} alt="" className="" />Students</Link>
                {/* <a html="#" className="col"><img src={students} alt="" className="" />Students</a> */}
                {/* <img src={students} alt="" className="col-md-3" />
                <p className="col-md-9">Students</p> */}
            </div>

            <div className="row navbar__item text-left">

                <Link to="/enrollment" className="col"><img src={medals} alt="" className="smaller-image" />Enrollment</Link>
                {/* <a html="#" className="col"><img src={medals} alt="" className="smaller-image" />Enrollment</a> */}
                {/* <img src={medals} alt="" className="col-md-3" />
                <p className="col-md-9">Enrollment</p> */}
            </div>

            <div className="list-break-bottom"></div>

            <div className="row navbar__item text-left">

                <Link to="/settings" className="col"><img src={nut} alt="" className="smaller-image" />Settings</Link>

                {/* <a html="#" className="col"><img src={nut} alt="" className="smaller-image" />Settings</a> */}
                {/* <img src={nut} alt="" className="col-md-4" />
                <p className="col-md-8">Settings</p> */}
            </div>     
        </nav>
    )
}

export default Navbar
