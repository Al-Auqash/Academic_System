import React from "react";
import { NavLink } from "react-router-dom";

const SubBar = () => {
    const subBar = {
        width: "100%",
    };

    const flexColumn = {
        display: "flex",
        flexDirection: "column",
    };

    const SubBarItem = {
        fontSize: "1rem",
    };

    return (
        <div style={subBar}>
            <div style={flexColumn}>
                <NavLink to="#" style={SubBarItem}>
                    <p>Presensi Online</p>
                    <p>Online Presence</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Kartu Rencana Studi</p>
                    <p>Course Selection Sheet</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Kartu Hasil Studi</p>
                    <p>Course Grade</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Jadwal Kuliah</p>
                    <p>Course Schedule</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Jadwal Ujian</p>
                    <p>Exam Schedule</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Absensi</p>
                    <p>Attendance</p>
                </NavLink>
                <NavLink to="#" style={SubBarItem}>
                    <p>Rekap Hasil Studi</p>
                    <p>Summary of Course Grades</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SubBar;
