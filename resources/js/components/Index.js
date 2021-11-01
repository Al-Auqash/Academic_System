import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Academic from "./academic/Academic";

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/akademik">
                    <div className="container-fluid p-0 m-0">
                        <div className="row">
                            <div className="col">
                                <NavBar />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "15vh" }}>
                            <div className="col">
                                <Academic />
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
