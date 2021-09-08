import React from "react";
import { NavLink } from "react-router-dom";

const SubBar = () => {
    const subBar = {
        width: "50%",
    };

    const flexColumn = {
        display: "flex",
        flexDirection: "column",
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
            <div style={flexColumn}>
                <NavLink to="#" style={subBarItem}>
                    <p>Presensi Online</p>
                    <p style={englishText}>Online Presence</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Kartu Rencana Studi</p>
                    <p style={englishText}>Course Selection Sheet</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Kartu Hasil Studi</p>
                    <p style={englishText}>Course Grade</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Jadwal Kuliah</p>
                    <p style={englishText}>Course Schedule</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Jadwal Ujian</p>
                    <p style={englishText}>Exam Schedule</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Absensi</p>
                    <p style={englishText}>Attendance</p>
                </NavLink>
                <NavLink to="#" style={subBarItem}>
                    <p>Rekap Hasil Studi</p>
                    <p style={englishText}>Summary of Course Grades</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SubBar;
