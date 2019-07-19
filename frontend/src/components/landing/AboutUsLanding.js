import React from "react";
import { Link } from "react-router-dom";


const AboutUsLanding = (props) => {
    return (
        <div className="about-us-landing">
            <h1>{props.language[props.locale].landingPage.whyUs}</h1>
            <div className="about-us-main">
                <div className="about-us-sidetext">
                    <h3>{props.language[props.locale].landingPage.whyUsLeftTextTitle}</h3>
                    <p>{props.language[props.locale].landingPage.whyUsLeftTextContent}</p>
                    <Link to="/fields">{props.language[props.locale].landingPage.whyUsLeftTextButton}</Link>
                </div>
                <ul className="about-us-list">
                    <li>
                        <i class="fab fa-css3-alt"></i>
                        <h2>{props.language[props.locale].landingPage.whyUsWebDesignTitle}</h2>
                        <p>{props.language[props.locale].landingPage.whyUsWebDesignDescription}</p>
                    </li>
                    <li>
                        <i class="fas fa-square-root-alt"></i>
                        <h2>{props.language[props.locale].landingPage.whyUsMathTitle}</h2>
                        <p>{props.language[props.locale].landingPage.whyUsMathDescription}</p>
                    </li>
                    <li>
                        <i class="fas fa-atom"></i>
                        <h2>{props.language[props.locale].landingPage.whyUsChemistryTitle}</h2>
                        <p>{props.language[props.locale].landingPage.whyUsChemistryDescription}</p>
                    </li>
                    <li>
                        <i class="fas fa-headphones-alt"></i>
                        <h2>{props.language[props.locale].landingPage.whyUsAudioEngineeringTitle}</h2>
                        <p>{props.language[props.locale].landingPage.whyUsAudioEngineeringDescription}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};      

export default AboutUsLanding;