import React from 'react'
import "./navbar.scss";
import book from "../../assets/icons/book.svg"
import medals from "../../assets/icons/medals.svg"
import nut from "../../assets/icons/nut.svg"
import students from "../../assets/icons/students.svg"
import house from "../../assets/icons/house.svg"


const Navbar = () => {
    return (
        <nav className="navbar container">
            <h1 className="navbar_header">_n</h1>
            <div className="row navbar__item justify-content-start">
                <a html="https://www.google.com" className="col"><img src={house} alt="" />Dashboard</a>
                {/* <p className="col">Dashboard</p> */}
            </div>
            <div className="row navbar__item justify-content-start">
                <a html="#" className="col"><img src={book} alt="" className="col" />Courses</a>
                {/* <p className="col">Courses</p> */}
            </div>
            <div className="row navbar__item justify-content-start" >
                <img src={students} alt="" className="col" />
                <p className="col">Students</p>
            </div>
            <div className="row navbar__item">
                <img src={medals} alt="" className="col" />
                <p className="col">Enrollment</p>
            </div>
            <div className="row navbar__item">
                <img src={nut} alt="" className="col" />
                <p className="col">Settings</p>
            </div>     
        </nav>
    )
}

export default Navbar
