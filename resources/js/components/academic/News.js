import React from "react";

const News = () => {
    const news = {
        width: "100%",
        height: "100%",
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
                <p>Nothing is happening right now</p>
            </div>
        </section>
    );
};

export default News;
