import React from "react";

import { Link } from "react-router-dom";

import "../../../css/NavBar.css";

import UB_Logo from "../../../images/Logo Universitas Brawijaya.png";
import White_Academic_Logo from "../../../images/Akademik-putih.png";
import White_Registration_Logo from "../../../images/Registrasi-putih.png";
import White_Bio_Logo from "../../../images/Biodata-putih.png";
import White_Application_Logo from "../../../images/aplikasi-putih.png";
import White_Student_Logo from "../../../images/Kemahasiswaan-putih.png";
import White_SignOut_Logo from "../../../images/Keluar-putih.png";

const NavBar = () => {
    const UB_Logo_Style = {
        width: "50%",
        marginTop: "10%",
        marginBottom: "15%",
    };

    const english_text = {
        fontStyle: "italic",
        fontSize: "75%",
    };

    return (
        <section id="sidebar">
            <img src={UB_Logo} style={UB_Logo_Style} />
            <Link className="sidebar-menu current" to="/akademik'">
                <img src={White_Academic_Logo} className="sidebar-menu-icon" />
                <div className="sidebar-menu-text">
                    <p>Akademik</p>
                    <p style={english_text}>Academic</p>
                </div>
            </Link>
            <Link className="sidebar-menu" to="/registrasi">
                <img
                    src={White_Registration_Logo}
                    className="sidebar-menu-icon"
                />
                <div className="sidebar-menu-text">
                    <p>Registrasi</p>
                    <p style={english_text}>Registration</p>
                </div>
            </Link>
            <Link className="sidebar-menu" to="/biodata">
                <img src={White_Bio_Logo} className="sidebar-menu-icon" />
                <div className="sidebar-menu-text">
                    <p>Biodata</p>
                    <p style={english_text}>Biodata</p>
                </div>
            </Link>
            <Link className="sidebar-menu" to="/aplikasi">
                <img
                    src={White_Application_Logo}
                    className="sidebar-menu-icon"
                />
                <div className="sidebar-menu-text">
                    <p>Aplikasi</p>
                    <p style={english_text}>Application</p>
                </div>
            </Link>
            <Link className="sidebar-menu" to="/kemahasiswaan">
                <img src={White_Student_Logo} className="sidebar-menu-icon" />
                <div className="sidebar-menu-text">
                    <p>Kemahasiswaan</p>
                    <p style={english_text}>Student Affairs</p>
                </div>
            </Link>
            <Link className="sidebar-menu" to="/login">
                <img src={White_SignOut_Logo} className="sidebar-menu-icon" />
                <div className="sidebar-menu-text">
                    <p>Keluar</p>
                    <p style={english_text}>Log Out</p>
                </div>
            </Link>
        </section>
    );
};

export default NavBar;
