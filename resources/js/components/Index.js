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
                    <div className="p-0">
                        <div className="row m-0 w-50">
                            <div className="col">
                                <NavBar />
                            </div>
                        </div>
                        <div className="row px-4 ml-0 mr-0" style={{ marginTop: "15vh" }} >
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
