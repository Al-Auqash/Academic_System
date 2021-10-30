import React from "react";

import { NavLink } from "react-router-dom";

import "../../../css/NavBar.css";

import UB_Logo from "../../../images/Logo Universitas Brawijaya.png";
import White_Academic_Logo from "../../../images/Akademik-putih.png";
import White_Registration_Logo from "../../../images/Registrasi-putih.png";
import White_Bio_Logo from "../../../images/Biodata-putih.png";
import White_Application_Logo from "../../../images/aplikasi-putih.png";
import White_Student_Logo from "../../../images/Kemahasiswaan-putih.png";
import White_SignOut_Logo from "../../../images/Keluar-putih.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    const UB_Logo_Style = {
        // height: ",
        padding: 0,
        margin: 0,
    };

    const english_text = {
        fontStyle: "italic",
        fontSize: "0.78em",
    };

    return (
        <section
            id="sidebar"
            style={{ backgroundColor: "#003250" }}
            className="navbar"
        >
            {/* <div className="nav-item">
                <img
                    src={UB_Logo}
                    style={UB_Logo_Style}
                    className="img-fluid"
                />
            </div> */}
            <NavLink to="/akademik" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Akademik</p>
                    <p className="m-0" style={english_text}>
                        Academic
                    </p>
                </div>
            </NavLink>
            <NavLink to="/registrasi" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Registrasi</p>
                    <p className="m-0" style={english_text}>
                        Registration
                    </p>
                </div>
            </NavLink>
            <NavLink to="/biodata" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Biodata</p>
                    <p className="m-0" style={english_text}>
                        Biodata
                    </p>
                </div>
            </NavLink>
            <NavLink to="/aplikasi" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Aplikasi</p>
                    <p className="m-0" style={english_text}>
                        Application
                    </p>
                </div>
            </NavLink>
            <NavLink to="/kemahasiswaan" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Kemahasiswaan</p>
                    <p className="m-0" style={english_text}>
                        Student Affairs
                    </p>
                </div>
            </NavLink>
            <NavLink to="/login" activeClassName="activeLink">
                <div className="sidebar-menu text-light pl-2">
                    <p className="m-0">Keluar</p>
                    <p className="m-0" style={english_text}>
                        Log Out
                    </p>
                </div>
            </NavLink>
        </section>
    );
};

export default NavBar;
