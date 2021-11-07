import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biodata from "./Biodata";
import Content from "./Content";
import News from "./News";
import SubBar from "./SubBar";

const Academic = () => {
    // const academic = {
    //     width: "90vw",
    //     marginLeft: "10vw",
    //     padding: "5%",
    // };

    return (
        <div className="container-fluid p-4 border rounded bg-light">
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
