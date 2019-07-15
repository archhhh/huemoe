import React from "react";
import Header from "../Header";
import Banner from "../landing/Banner";


const AboutUs = (props) => {
    return(
        <div className="about-us">
            {/* <Header language={props.language} locale={props.locale} localeChange={props.localeChange}/>*/}
            <Banner language={props.language} locale={props.locale}/>
            <div className="about-us-content">
                <p>{props.language[props.locale].aboutUs.text}</p>
            </div>
        </div>
    );
};

export default AboutUs;