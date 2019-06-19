import React, { Component } from "react";
import CourseBanner from "./CourseBanner";
import Header from "../Header";
import CourseNav from "./CourseNav";


class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Machine Learning",
            organization: "Stanford University",
            organizationImg: "stanford.jpg",
            instructor: "Andrew Ng",
            level: "Undergraduate Beginner",
            language: "en",
            tags: [
                "machine learning",
                "deep learning"
            ],
            content: [
                [
                    {
                        name: "Introduction to the Course",
                        type: "text",
                        data: "",     
                    },
                    {
                        name: "Introduction to React",
                        type: "video",
                        url: "",
                        downloadingMaterials: [
                            {
                                url: "",
                                name: "slides",
                            },
                            {
                                url: "",
                                name: "notes",
                            }
                        ],
                    },
                ],
                [
                    {
                        name: "State",
                        type: "video",
                        url: "",     
                        downloadingMaterials: [
                            {
                                url: "",
                                name: "slides",
                            },
                            {
                                url: "",
                                name: "notes",
                            }
                        ],
                    },
                    {
                        name: "React Components",
                        type: "video",
                        url: "",
                        downloadingMaterials: [
                            {
                                url: "",
                                name: "slides",
                            },
                            {
                                url: "",
                                name: "notes",
                            }
                        ],
                    },  
                    {
                        name: "DOM Events",
                        type: "video",
                        url: "",
                        downloadingMaterials: [
                            {
                                url: "",
                                name: "slides",
                            },
                            {
                                url: "",
                                name: "notes",
                            }
                        ],  
                    },  
                ]
            ],
            active: {
                x: 0,
                y: 0,
            },
        };
    }
    pickActive = ( active ) => {
        this.setState({
            active: active,
        });
    }
    render(){
        return (
            <div className="course">
                <Header />
                <CourseBanner 
                    name = {this.state.name}
                    organization = {this.state.organization}
                    organizationImg = {this.state.organizationImg}
                    instructor = {this.state.instructor}
                    language = {this.state.language}
                    level = {this.state.level}
                    tags = {this.state.tags}
                />
                <CourseNav
                    content={this.state.content}
                    active={this.state.active}
                    pickActive={this.pickActive}
                /> 
            </div>
        );
    }
}; 

export default Course;