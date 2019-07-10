import React from "react";


const CourseBanner = (props) => {
    return (
        <div className="course-banner">
            <img className="course-banner-img" src={props.img} />
            <div className="course-banner-text">
                <div className="course-organization">
                    <img className="course-organization-img" src={props.organizationImg}></img>
                    <p className="course-organization-name">{props.organization}</p>
                </div>
                <h1 className="course-name">{props.name}</h1>
                <p className="course-level">{props.language[props.courseLocale].course.level}: {props.level}</p>
                <p className="course-instructor">{props.language[props.courseLocale].course.instructor}: {props.instructor}</p>
            </div>
        </div>
    );
};

export default CourseBanner;