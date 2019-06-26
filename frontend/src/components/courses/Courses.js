import React, { Component } from "react";
import CoursesBanner from "./CoursesBanner";
import CoursesList from "./CoursesList";
import Header from "../Header";


class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            name: {
                "RU": "Машинное обучение",
                "EN": "Machine Learning",
            },
            description: {
                "RU": "Текст",
                "EN": "Text",
            },
            img: "mlbanner.jpg",
            courses: [
                {
                    img: "stanford-ml.jpg",
                    organization: "Stanford University",
                    organizationImg: "stanford.jpg",
                    level: {
                        "RU": "Начальный",
                        "EN": "Undergraduate Beginner"
                    },
                    name: {
                        "RU": "Машинное обучение",
                        "EN": "Machine Learning",
                    },
                    description: {
                        "RU": "Текст",
                        "EN": "Text",
                    },
                    url: "/fields/cs/ml/stanford-machine-learning",
                    tags: {
                        "RU": ["машинное обучение", "глубокое обучение"],
                        "EN": ["machine learning", "deep learning"]
                    },
                },
                {
                    img: "deeplearningai-ai4e.jpg",
                    organization: "deeplearning.ai",
                    organizationImg: "deeplearningai.jpg",
                    level: {
                        "RU": "Начальный",
                        "EN": "Undergraduate Beginner"
                    },
                    name: {
                        "RU": "Глубокое обучение",
                        "EN": "Deep Learning",
                    },
                    description: {
                        "RU": "Текст",
                        "EN": "Text",
                    },
                    url: "/fields/cs/ml/deeplearningai-deeplearning",
                    tags: {
                        "RU": ["машинное обучение", "глубокое обучение"],
                        "EN": ["machine learning", "deep learning"]
                    },
                },
            ],
        };
    }
    changeSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    };
    render(){
        return (
            <div className="courses">
                <Header language={this.props.language} locale={this.props.locale}/>
                <CoursesBanner 
                    locale={this.props.locale}
                    img={this.state.img} 
                    name={this.state.name} 
                    description={this.state.description}
                />
                <CoursesList 
                    changeSearchValue={this.changeSearchValue} 
                    searchValue={this.state.searchValue} 
                    courses={this.state.courses}
                    language={this.props.language}
                    locale={this.props.locale}
                />
            </div>
        );
    }
}; 

export default Courses;