import React from "react";
import Header from "../Header";
import Banner from "../landing/Banner";


const Error = (props) => {
    return(
        <div className="error">
            <Header language={props.language} locale={props.locale}/>
            <div className="error-content">
                <p>{props.language[props.locale].error.text}</p>
            </div>
        </div>
    );
};

export default Error;