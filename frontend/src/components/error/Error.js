import React from "react";
import Header from "../Header";


const Error = (props) => {
    return(
        <div className="error">
            <Header language={props.language} locale={props.locale} localeChange={this.props.localeChange}/>
            <div className="error-content">
                <p>{props.language[props.locale].error.text}</p>
            </div>
        </div>
    );
};

export default Error;