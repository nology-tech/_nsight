import React from 'react'
import "./navbar.scss";
import "../../assets/styles/_variables.scss"
import book from "../../assets/icons/book.svg"
import medals from "../../assets/icons/medals.svg"
import nut from "../../assets/icons/nut.svg"
import students from "../../assets/icons/students.svg"
import house from "../../assets/icons/house.svg"


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar_header">_n</h1>
            <div className="navbar__item">
                <img src={house} alt="" />
                <p>Dashboard</p>
            </div>
            <div className="navbar__item">
                <img src={book} alt="" />
                <p>Courses</p>
            </div>
            <div className="navbar__item">
                <img src={students} alt="" />
                <p>Students</p>
            </div>
            <div className="navbar__item">
                <img src={medals} alt="" />
                <p>Enrollment</p>
            </div>
            <div className="navbar__item">
                <img src={nut} alt="" />
                <p>Settings</p>
            </div>     
        </nav>
    )
}

export default Navbar
