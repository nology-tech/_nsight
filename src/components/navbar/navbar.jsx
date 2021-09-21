import React from 'react'
import "./navbar.scss";
import "../../assets/styles/_variables.scss"
import book from "../../assets/icons/book.svg"
import medals from "../../assets/icons/medals.svg"
import nut from "../../assets/icons/nut.svg"
import students from "../../assets/students.svg"


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar_item">_n</h1>
            <div className="navbar__item">
                <img src={book} alt="" />
                <p>Dashboard</p>
            </div>
            <div className="navbar__item">
                <p>Icon</p>
                <p>Courses</p>
            </div>
            <div className="navbar__item">
                <p>Icon</p>
                <p>Students</p>
            </div>
            <div className="navbar__item">
                <p>Icon</p>
                <p>Enrollment</p>
            </div>
            <div className="navbar__item">
                <p>Icon</p>
                <p>Settings</p>
            </div>     
        </nav>
    )
}

export default Navbar
