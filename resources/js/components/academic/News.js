import React from "react";

const News = () => {
    const news = {
        width: "40%",
        backgroundColor: "#003250",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <section style={news}>
            <div>
                <p>NEWS</p>
            </div>
        </section>
    );
};

export default News;
