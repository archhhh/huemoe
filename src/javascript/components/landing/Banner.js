import React from "react";


const Banner = () => {
    return (
        <div className="banner">
            <img src={require("../../../assets/hero-bg.jpg")} />
            <div className="banner-text">
                <p>Ya sosal</p>
                <h1>Menya Ebali</h1>
                <button className="banner-button-why"> POCHEMU </button>
                <button className="banner-button-browse"> OBEMA NAHUY </button>
            </div>

        </div>
    );
};

export default Banner;