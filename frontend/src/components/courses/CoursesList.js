import React from "react";
import { Link } from "react-router-dom";


const CoursesList = (props) => {
    return (
        <div className="courses-list">
            <div className="courses-filters">
                <input type="text" placeholder={props.language[props.locale].courses.searchPlaceholder} onChange={props.changeSearchValue} value={props.searchValue}/>
                {/*<div className="courses-select">
                    <button className="courses-select-input-left-button">Level</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>
                <div className="courses-select">
                    <button className="courses-select-input-left-button">Organization</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>*/}
            </div>
            <ul>
                { props.courses.map((course) => 
                <li>
                    <Link exact to={"/courses/"+course.url}>
                        <div className="courses-item-img">
                            <img src={course.img}></img>
                        </div>
                        <div className="courses-item-text">
                                <div className="courses-profile">   
                                    <img src={course.organizationImg} />
                                    <p>{course.organization}</p>
                                </div>
                                <div className="line"></div>
                                <div className="courses-info">
                                    <h2>{course.name}</h2>
                                    <p className="courses-level">{props.language[props.locale].courses.level}: {course.level}</p>
                                    <p className="courses-tags">
                                            {course.tags.map( (tag) => <span>{tag}</span>)}
                                    </p>
                                    <p className="courses-languages">{props.language[props.locale].courses.supportedLanguages}: {course.supportedLanguages.map( (language, index) => index === course.supportedLanguages.length-1 ? language : `${language}, ` )}</p>
                                    <p className="courses-description">{course.description}</p>
                                </div>
                        </div>
                    </Link>
                </li>                
                )}
            </ul>
        </div>
    );
};

export default CoursesList;