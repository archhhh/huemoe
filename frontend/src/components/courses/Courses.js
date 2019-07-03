import React, { Component } from "react";
import CoursesBanner from "./CoursesBanner";
import CoursesList from "./CoursesList";
import Header from "../Header";


class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            name: "Машинное обучение",
            description: "Обширный подраздел искусственного интеллекта, изучающий методы построения алгоритмов, способных обучаться",
            img: "mlbanner.jpg",
            courses: [
                {
                    img: "stanford-ml.jpg",
                    organization: "Стэнфордский Университет",
                    organizationImg: "stanford.jpg",
                    level: "Начальный",
                    name: "Машинное обучение",
                    description: "Текст",
                    url: "/fields/cs/ml/stanford-machine-learning",
                    tags: ["машинное обучение", "глубокое обучение"],
                    supportedLanguages: [
                        "EN", "RU",
                    ],
                },
                {
                    img: "deeplearningai-ai4e.jpg",
                    organization: "deeplearning.ai",
                    organizationImg: "deeplearningai.jpg",
                    level: "Начальный",
                    name: "Глубокое обучение",
                    description: "Текст",
                    url: "/fields/cs/ml/deeplearningai-deeplearning",
                    tags: ["машинное обучение", "глубокое обучение"],
                    supportedLanguages: [
                        "EN", "RU",
                    ],
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