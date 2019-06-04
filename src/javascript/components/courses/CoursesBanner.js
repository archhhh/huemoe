import React from "react";


const CoursesBanner = () => {
    return (
        <div className="courses-banner">
            <img src={require("../../../assets/mlbanner.jpg")} />
            <div className="courses-banner-text">
                <h1>Machine Learning</h1>
            </div>
        </div>
    );
};

export default CoursesBanner;