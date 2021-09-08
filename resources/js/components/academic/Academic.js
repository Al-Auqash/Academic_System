import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biodata from "./Biodata";
import Content from "./Content";
import News from "./News";
import SubBar from "./SubBar";

const Academic = () => {
    const academic = {
        width: "90vw",
        marginLeft: "10vw",
        padding: "5%",
    };

    return (
        <div style={academic}>
            <Router>
                <Switch>
                    <Route path="/akademik">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row">
                                <Biodata />
                                <News />
                            </div>
                            <div className="d-flex flex-row mt-5">
                                <SubBar />
                                <Content />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Academic;
