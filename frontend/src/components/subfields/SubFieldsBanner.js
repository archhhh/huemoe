import React from "react";


const SubFieldsBanner = (props) => {
    return (
        <div className="subfields-banner">
            <img src={require("../../assets/" + props.img)} />
            <div className="subfields-banner-text">
                <h1>{props.name[props.locale]}</h1>
                <p>{props.description[props.locale]}</p>
            </div>
        </div>
    );
};

export default SubFieldsBanner;