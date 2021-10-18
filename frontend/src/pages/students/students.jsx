import React, { useState, useEffect } from "react";
import "./students.scss";
import TopHeader from "../../components/topheader/topheader";
import StudentIndex from "./studentIndex/studentIndex";

const Students = () => {

    return (
        <div className="main-student">
            <TopHeader title="Students" />
            <StudentIndex />
        </div>
    );
};

export default Students;
