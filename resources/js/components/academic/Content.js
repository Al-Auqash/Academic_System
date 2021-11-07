import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Content = () => {
    const content = {
        width: "50%",
        backgroundColor: "#003250",
    };

    return (
        <section style={content}>
            <Router>
                <Switch>
                    <Route exact path="/akademik">
                        <p className="text-white">Stay Positive</p>
                    </Route>
                    <Route exact path="/akademik/presensi-online">
                        <p>presensi online</p>
                    </Route>
                    <Route exact path="/akademik/kartu-rencana-studi">
                        <p>kartu rencana studi</p>
                    </Route>
                    <Route exact path="/akademik/kartu-hasil-studi">
                        <p>kartu hasil studi</p>
                    </Route>
                    <Route exact path="/akademik/jadwal-kuliah">
                        <p>jadwal kuliah</p>
                    </Route>
                    <Route exact path="/akademik/jadwal-ujian">
                        <p>jadwal ujian</p>
                    </Route>
                    <Route exact path="/akademik/absensi">
                        <p>absensi</p>
                    </Route>
                    <Route exact path="/akademik/rekap-hasil-studi">
                        <p>RHS</p>
                    </Route>
                </Switch>
            </Router>
        </section>
    );
};

export default Content;
