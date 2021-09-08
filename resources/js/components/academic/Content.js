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
                        <p>Stay Positive</p>
                    </Route>
                </Switch>
            </Router>
        </section>
    );
};

export default Content;
