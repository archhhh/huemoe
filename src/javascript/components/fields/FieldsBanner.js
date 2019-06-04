import React from "react";


const FieldsBanner = () => {
    return (
        <div className="fields-banner">
            <img src={require("../../../assets/fieldsbanner.jpg")} />
            <div className="fields-banner-text">
                <h1>Explore Fields</h1>
            </div>
        </div>
    );
};

export default FieldsBanner;