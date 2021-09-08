import React from "react";

import UserEx from "./../../../images/user-ex.jpg";

const Biodata = () => {
    const biodata = {
        margin: "0",
        padding: "0",
        width: "60%",
    };

    const tableBiodata = {
        width: "80%",
    };

    const tableItem = {
        padding: "0.5 rem",
    };

    const photoProfile = {
        width: "20%",
        objectFit: "cover",
    };
    return (
        <section className="biodata d-flex flex-row" style={biodata}>
            <img style={photoProfile} src={UserEx}></img>
            <table className="table-borderless ml-2" style={tableBiodata}>
                <tr>
                    <td style={tableItem}>NIM</td>
                    <td style={tableItem}>NIM</td>
                </tr>
                <tr>
                    <td style={tableItem}>Nama</td>
                    <td style={tableItem}>Nama</td>
                </tr>
                <tr>
                    <td style={tableItem}>Jenjang/Fakultas</td>
                    <td style={tableItem}>Jenjang/Fakultas</td>
                </tr>
                <tr>
                    <td style={tableItem}>Jurusan</td>
                    <td style={tableItem}>Jurusan</td>
                </tr>
                <tr>
                    <td style={tableItem}>Program Studi</td>
                    <td style={tableItem}>Program Studi</td>
                </tr>
                <tr>
                    <td style={tableItem}>Seleksi</td>
                    <td style={tableItem}>Seleksi</td>
                </tr>
                <tr>
                    <td style={tableItem}>Nomor Ujian</td>
                    <td style={tableItem}>Nomor Ujian</td>
                </tr>
                <tr>
                    <td style={tableItem}>Status</td>
                    <td style={tableItem}>Status</td>
                </tr>
            </table>
        </section>
    );
};

export default Biodata;
