import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/NavBar.css";

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
                <NavLink exact to="akademik/presensi-online" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Presensi Online</p>
                    <p className="text-dark" style={englishText}>
                        Online Presence
                    </p>
                </NavLink>
                <NavLink exact to="akademik/kartu-rencana-studi" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Kartu Rencana Studi</p>
                    <p className="text-dark" style={englishText}>
                        Course Selection Sheet
                    </p>
                </NavLink>
                <NavLink exact to="akademik/kartu-hasil-studi" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Kartu Hasil Studi</p>
                    <p className="text-dark" style={englishText}>
                        Course Grade
                    </p>
                </NavLink>
                <NavLink exact to="akademik/jadwal-kuliah" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Jadwal Kuliah</p>
                    <p className="text-dark" style={englishText}>
                        Course Schedule
                    </p>
                </NavLink>
                <NavLink exact to="akademik/jadwal-ujian" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Jadwal Ujian</p>
                    <p className="text-dark" style={englishText}>
                        Exam Schedule
                    </p>
                </NavLink>
                <NavLink exact to="akademik/absensi" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Absensi</p>
                    <p className="text-dark" style={englishText}>
                        Attendance
                    </p>
                </NavLink>
                <NavLink exact to="akademik/rekap-hasil-studi" style={subBarItem} activeClassName="activeLink">
                    <p className="text-dark m-0 p-0">Rekap Hasil Studi</p>
                    <p className="text-dark" style={englishText}>
                        Summary of Course Grades
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default SubBar;
