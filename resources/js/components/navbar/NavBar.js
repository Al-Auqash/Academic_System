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
        <nav
            id="navbar"
            style={{ backgroundColor: "#003250" }}
            className="navbar fixed-top navbar-expand-lg p-0"
        >
            <div className="collapse navbar-collapse">
                <NavLink to="#" className="nav-bar-brand m-2">
                    <img
                        src={UB_Logo}
                        width="75"
                        height="75"
                        className="img-fluid"
                    />
                </NavLink>
                <ul className="navbar-nav">
                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/akademik"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Akademik</p>
                        <p className="m-0" style={english_text}>
                            Academic
                        </p>
                    </NavLink>

                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/registrasi"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Registrasi</p>
                        <p className="m-0" style={english_text}>
                            Registration
                        </p>
                    </NavLink>

                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/biodata"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Biodata</p>
                        <p className="m-0" style={english_text}>
                            Biodata
                        </p>
                    </NavLink>

                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/aplikasi"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Aplikasi</p>
                        <p className="m-0" style={english_text}>
                            Application
                        </p>
                    </NavLink>

                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/kemahasiswaan"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Kemahasiswaan</p>
                        <p className="m-0" style={english_text}>
                            Student Affairs
                        </p>
                    </NavLink>

                    <NavLink
                        className="nav-item mx-4 item-menu"
                        to="/login"
                        activeClassName="activeLink"
                    >
                        <p className="m-0">Keluar</p>
                        <p className="m-0" style={english_text}>
                            Log Out
                        </p>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
