import React from "react";


const CourseContent = (props) => {
    return (
        <div className="course-content">
            <div className="course-content-supplementary">
                <h2 className="course-content-supplementary-title">
                    {props.language[props.courseLocale].course.supplementaryMaterials}
                </h2>
                <ul className="course-content-supplementary-materials">
                    {props.content.supplementaryMaterials.map( (material) => 
                        <li><a className="course-content-supplementary-material" href={material.url}>{material.name}</a></li>
                    )}
                </ul>
            </div>            
            {props.content.type === "video" 
            ? "" 
            : <div className="course-content-text" dangerouslySetInnerHTML={{__html: props.content.data}}></div>}
            
        </div>
    );
};


export default CourseContent;