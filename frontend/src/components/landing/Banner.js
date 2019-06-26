import React from "react";
import { Link } from "react-router-dom"


const Banner = (props) => {
    return (
        <div className="banner">
            <img src={require("../../assets/landingbanner.jpg")} />
            <div className="banner-text">
                <p>{props.language[props.locale].landingPage.bannerUpperText}</p>
                <h1>{props.language[props.locale].landingPage.bannerLowerText}</h1>
                <div>
                    <Link exact to="/fields" className="banner-button-why">{props.language[props.locale].landingPage.bannerLeftButton}</Link>
                    <Link exact to="/about-us" className="banner-button-browse" >{props.language[props.locale].landingPage.bannerRightButton}</Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;