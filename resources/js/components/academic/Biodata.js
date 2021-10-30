import React from "react";

import UserEx from "./../../../images/user-ex.jpg";

const Biodata = () => {
    const photoProfile = {
        objectFit: "cover",
    };
    return (
        <div className="biodata row">
            <img
                className="col-3 rounded mx-auto d-block"
                style={photoProfile}
                src={UserEx}
            ></img>
            <div className="col-9">
                <table className="table-borderless">
                    <tr>
                        <td width="50%">NIM</td>
                        <th width="50%" className="pl-4">
                            NIM
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Nama</td>
                        <th width="50%" className="pl-4">
                            Nama
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Jenjang/Fakultas</td>
                        <th width="50%" className="pl-4">
                            Jenjang/Fakultas
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Jurusan</td>
                        <th width="50%" className="pl-4">
                            Jurusan
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Program Studi</td>
                        <th width="50%" className="pl-4">
                            Program Studi
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Seleksi</td>
                        <th width="50%" className="pl-4">
                            Seleksi
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Nomor Ujian</td>
                        <th width="50%" className="pl-4">
                            Nomor Ujian
                        </th>
                    </tr>
                    <tr>
                        <td width="50%">Status</td>
                        <th width="50%" className="pl-4">
                            Status
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Biodata;
