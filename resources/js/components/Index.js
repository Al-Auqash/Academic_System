import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./navbar/NavBar";

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Router>
                            <Switch>
                                <Route path="/akademik">
                                    <NavBar />
                                </Route>
                            </Switch>
                        </Router>
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
