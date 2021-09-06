import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biodata from "./Biodata";
import SubBar from "./SubBar";

const Academic = () => {
    const academic = {
        width: "70vw",
        marginLeft: "10vw",
        padding: "5%",
    };

    return (
        <div style={academic}>
            <Router>
                <Switch>
                    <Route path="/akademik">
                        <Biodata />
                        <SubBar />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Academic;
