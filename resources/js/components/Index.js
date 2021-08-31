import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Test from "./Test.js";

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <p>hello</p>
                        <Router>
                            <Switch>
                                <Route path="/">
                                    <NavBar />
                                    <Test />
                                </Route>
                            </Switch>
                        </Router>
                        <div className="card-header">Index Component</div>

                        <div className="card-body">I'm an Index component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
