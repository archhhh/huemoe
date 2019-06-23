import React from "react";


const FieldsBanner = (props) => {
    return (
        <div className="fields-banner">
            <img src={require("../../assets/fieldsbanner.jpg")} />
            <div className="fields-banner-text">
                <h1>{props.language[props.locale].fields.bannerTitle}</h1>
            </div>
        </div>
    );
};

export default FieldsBanner;