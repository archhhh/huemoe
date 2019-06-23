import React from "react";
import { Link } from "react-router-dom"


const Banner = (props) => {
    return (
        <div className="banner">
            <img src={require("../../assets/landingbanner.jpg")} />
            <div className="banner-text">
                <p>{props.language[props.locale].landingPage.bannerLowerText}</p>
                <h1>{props.language[props.locale].landingPage.bannerUpperText}</h1>
                <Link className="banner-button-browse" exact to="/fields">{props.language[props.locale].landingPage.bannerLeftButton}</Link>
                <Link className="banner-button-why" >{props.language[props.locale].landingPage.bannerRightButton}</Link>
            </div>
        </div>
    );
};

export default Banner;