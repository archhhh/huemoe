import React from "react";


const CoursesBanner = (props) => {
    return (
        <div className="courses-banner">
            <img src={props.img} />
            <div className="courses-banner-text">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default CoursesBanner;