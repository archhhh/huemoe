import React from "react";


const CourseBanner = (props) => {
    return (
        <div className="course-banner">
            <img className="course-banner-img" src={require("../../../assets/stanford-machine-learning.jpg")} />
            <div className="course-banner-text">
                <div className="course-banner-text-left">
                    <p className="course-tags">
                        {props.tags.map(
                            (tag) => <span className="course-tag">{tag}</span>
                        )}
                    </p>
                    <h1 className="course-name">{props.name}</h1>
                    <p className="course-level">{props.language[props.courseLocale].course.level}: {props.level}</p>
                    <p className="course-language">{props.courseLocale}</p>
                </div>
                <div className="course-banner-text-right">
                    <div className="course-organization">
                        <img className="course-organization-img" src={require("../../../assets/"+props.organizationImg)}></img>
                        <p className="course-organization-name">{props.organization}</p>
                    </div>
                    <p className="course-instructor">{props.language[props.courseLocale].course.instructor}: {props.instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;