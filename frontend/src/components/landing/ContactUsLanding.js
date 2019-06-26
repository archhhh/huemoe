import React from "react";
import {Link} from "react-router-dom";


const ContactUsLanding = (props) => {
    return (
        <div className="contact-us-landing">
            <div className="contact-us-landing-content">
                <h1>{props.language[props.locale].landingPage.contactUs}</h1>
                <Link to="/about-us"><button>{props.language[props.locale].landingPage.contactUsButton}</button></Link>
            </div>
        </div>
    );
};      

export default ContactUsLanding;