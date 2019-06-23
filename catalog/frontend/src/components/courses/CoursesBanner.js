import React from "react";


const CoursesBanner = (props) => {
    return (
        <div className="courses-banner">
            <img src={require("../../../assets/" + props.img)} />
            <div className="courses-banner-text">
                <h1>{props.name[props.locale]}</h1>
                <p>{props.description[props.locale]}</p>
            </div>
        </div>
    );
};

export default CoursesBanner;