import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biodata from "./Biodata";
import Content from "./Content";
import News from "./News";
import SubBar from "./SubBar";

const Academic = () => {
    const academic = {
        backgroundColor: "#FFF7F7",
    };

    return (
        <div className="container-fluid p-5 border rounded" style={academic}>
            <Router>
                <Switch>
                    <Route path="/akademik">
                        <div className="row">
                            <div className="col-9 p-0 m-0">
                                <Biodata />
                            </div>
                            <div className="col-3">
                                <News />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <SubBar />
                            <Content />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Academic;
