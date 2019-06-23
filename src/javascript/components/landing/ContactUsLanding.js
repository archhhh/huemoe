import React from "react";


const ContactUsLanding = (props) => {
    return (
        <div className="contact-us-landing">
            <div className="contact-us-landing-content">
                <h1>{props.language[props.locale].landingPage.contactUs}</h1>
                <button>{props.language[props.locale].landingPage.contactUsButton}</button>
            </div>
        </div>
    );
};      

export default ContactUsLanding;