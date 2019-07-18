import React from "react";


const CourseBanner = (props) => {
    return (
        <div className="course-banner">
            <img className="course-banner-img" src={props.img} />
            <div className="course-banner-text">
                <div className="course-organization">
                    <img className="course-organization-img" src={props.organizationImg}></img>
                    <p className="course-organization-name"><a href={props.organizationUrl}>{props.organization}</a></p>
                </div>
                <h1 className="course-name">{props.name[props.courseLocale]}</h1>
                <p className="course-level">{props.language[props.courseLocale].course.level}: {props.level[props.courseLocale]}</p>
                <p className="course-instructor">{props.language[props.courseLocale].course.instructor}: <a href={props.instructorUrl}>{props.instructor}</a></p>
            </div>
        </div>
    );
};

export default CourseBanner;