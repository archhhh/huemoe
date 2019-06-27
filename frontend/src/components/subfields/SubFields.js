import React, { Component } from "react";
import SubFieldsBanner from "./SubFieldsBanner";
import SubFieldsList from "./SubFieldsList";
import Header from "../Header";


class SubFields extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            name: {
                "RU": "Информатика",
                "EN": "Computer Science",
            },
            description: {
                "RU": "",
                "EN": "",
            },
            img: "csbanner1.jpg",
            subfields: [
                {
                    img: "ml.png",
                    name: {
                        "RU": "Машинное обучение",
                        "EN": "Machine Learning",
                    },
                    description: {
                        "RU": "Текст",
                        "EN": "Text",
                    },
                    url: "/fields/cs/ml",
                },
                {
                    img: "os.jpg",
                    name: {
                        "RU": "Операционные Системы",
                        "EN": "Operating Systems",
                    },
                    description: {
                        "RU": "Текст",
                        "EN": "Text",
                    },
                    url: "#",
                },
                {
                    img: "algorithms.jpg",
                    name: {
                        "RU": "Алгоритмы и Структуры Данных",
                        "EN": "Algorithms & Data Structures",
                    },
                    description: {
                        "RU": "Текст",
                        "EN": "Text",
                    },
                    url: "#",
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
            <div className="subfields">
                <Header language={this.props.language} locale={this.props.locale}/>
                <SubFieldsBanner 
                    locale={this.props.locale} 
                    language={this.props.language} 
                    name={this.state.name} 
                    description={this.state.description} 
                    img={this.state.img}
                />
                <SubFieldsList 
                    subfields={this.state.subfields} 
                    searchValue={this.state.searchValue} 
                    changeSearchValue={this.changeSearchValue}
                    locale={this.props.locale} 
                    language={this.props.language}
                />
            </div>
        );
    }
}; 

export default SubFields;