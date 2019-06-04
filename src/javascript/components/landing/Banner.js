import React from "react";
import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div className="banner">
            <img src={require("../../../assets/landingbanner.jpg")} />
            <div className="banner-text">
                <p>Ya sosal</p>
                <h1>Menya Ebali</h1>
                <Link className="banner-button-why"> POCHEMU </Link>
                <Link className="banner-button-browse" exact to="/fields"> OBEMA NAHUY </Link>
            </div>
        </div>
    );
};

export default Banner;