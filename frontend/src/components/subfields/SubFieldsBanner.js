import React from "react";


const SubFieldsBanner = (props) => {
    return (
        <div className="subfields-banner">
            <img src={props.img} />
            <div className="subfields-banner-text">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default SubFieldsBanner;