import React from "react";
import { NavLink } from "react-router-dom";

const SubBar = () => {
    const subBar = {
        width: "50%",
    };

    const subBarItem = {
        fontSize: "1rem",
    };

    const englishText = {
        fontSize: "75%",
        fontStyle: "italic",
    };

    return (
        <div style={subBar}>
            <div className="d-flex flex-column">
                <NavLink to="#" style={subBarItem} >
                    <p className="m-0 p-0" >Presensi Online</p>
                    <p style={englishText}>Online Presence</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Kartu Rencana Studi</p>
                    <p style={englishText}>Course Selection Sheet</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Kartu Hasil Studi</p>
                    <p style={englishText}>Course Grade</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Jadwal Kuliah</p>
                    <p style={englishText}>Course Schedule</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Jadwal Ujian</p>
                    <p style={englishText}>Exam Schedule</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Absensi</p>
                    <p style={englishText}>Attendance</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p className="m-0 p-0">Rekap Hasil Studi</p>
                    <p style={englishText}>Summary of Course Grades</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SubBar;
