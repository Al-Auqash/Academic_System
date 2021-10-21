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
                    <div className="container-fluid m-0">
                        <div className="row w-100">
                            <div className="p-0 col-2">
                                <NavBar />
                            </div>
                            <div className="col-10">
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
