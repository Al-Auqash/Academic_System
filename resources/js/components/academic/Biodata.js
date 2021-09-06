import React from "react";

const Biodata = () => {
    const biodata = {};
    return (
        <section className="biodata d-flex flex-row" style={biodata}>
            <img className="photoProfile" src="#"></img>
            <table class="table table-borderless">
                <tr>
                    <td>NIM</td>
                    <td>NIM</td>
                </tr>
                <tr>
                    <td>Nama</td>
                    <td>Nama</td>
                </tr>
                <tr>
                    <td>Jenjang/Fakultas</td>
                    <td>Jenjang/Fakultas</td>
                </tr>
                <tr>
                    <td>Jurusan</td>
                    <td>Jurusan</td>
                </tr>
                <tr>
                    <td>Program Studi</td>
                    <td>Program Studi</td>
                </tr>
                <tr>
                    <td>Seleksi</td>
                    <td>Seleksi</td>
                </tr>
                <tr>
                    <td>Nomor Ujian</td>
                    <td>Nomor Ujian</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>Status</td>
                </tr>
            </table>
        </section>
    );
};

export default Biodata;
