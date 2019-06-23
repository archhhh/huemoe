import React, { Component } from "react";
import CourseBanner from "./CourseBanner";
import CourseNav from "./CourseNav";
import CourseContent from "./CourseContent";


class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Машинное Обучение",
            organization: "Stanford University",
            organizationImg: "stanford.jpg",
            instructor: "Эндрю Энг",
            level: "Начальный",
            tags: [
                "машинное обучение",
                "глубокое обучение"
            ],
            content: [
                [
                    {
                        name: "Вступление в курс",
                        type: "text",
                        data: "<h1>Вступление в курс</h1><p>Добро пожаловать на курс Машинного Обучения</p>",     
                        supplementaryMaterials: [
                            {
                                url: "",
                                name: "слайды",
                            },
                            {
                                url: "",
                                name: "конспекты",
                            }
                        ],
                    },
                    {
                        name: "Вступление в Машинное Обучение",
                        type: "video",
                        url: "",
                        supplementaryMaterials: [
                            {
                                url: "",
                                name: "слайды",
                            },
                            {
                                url: "",
                                name: "конспекты",
                            }
                        ],
                    },
                ],
                [
                    {
                        name: "Линейная Регрессия",
                        type: "video",
                        url: "",     
                        supplementaryMaterials: [
                            {
                                url: "",
                                name: "слайды",
                            },
                            {
                                url: "",
                                name: "конспекты",
                            }
                        ],
                    },
                    {
                        name: "Обратное распространение",
                        type: "video",
                        url: "",
                        supplementaryMaterials: [
                            {
                                url: "",
                                name: "слайды",
                            },
                            {
                                url: "",
                                name: "конспекты",
                            }
                        ],
                    },  
                ]
            ],
            active: {
                x: 0,
                y: 0,
            },
            courseLocale: this.props.locale,
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
                <CourseBanner 
                    name = {this.state.name}
                    organization = {this.state.organization}
                    organizationImg = {this.state.organizationImg}
                    instructor = {this.state.instructor}
                    courseLocale = {this.state.courseLocale}
                    level = {this.state.level}
                    tags = {this.state.tags}
                    language = {this.props.language}
                />
                <CourseNav
                    content={this.state.content}
                    active={this.state.active}
                    pickActive={this.pickActive}
                    courseLocale = {this.state.courseLocale}
                    language = {this.props.language}
                /> 
                <CourseContent 
                    content={this.state.content[this.state.active.x][this.state.active.y]}
                    language = {this.props.language}
                    courseLocale = {this.state.courseLocale}
                />
            </div>
        );
    }
}; 

export default Course;