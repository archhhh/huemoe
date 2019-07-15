import React, { Component } from "react";
import CoursesBanner from "./CoursesBanner";
import CoursesList from "./CoursesList";
import Header from "../Header";
import axios from "axios";


class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            name: "",
            description: "",
            img: "",
            courses: [
            ],
        };
    }
    componentDidMount = () => {
        this.setState({
            isLoading: true
        });
        axios.get(`http://67.205.173.77:8000/api/subfields?id=${this.props.match.params.subfield}`)
        .then((resp) => {
            this.setState({
                name: {
                    RU: resp.data[0].title_ru,
                    EN: resp.data[0].title,
                },
                description: {
                    RU: resp.data[0].description_ru,
                    EN: resp.data[0].description,
                },
                img: resp.data[0].img_banner       
            });
            axios.get(`http://67.205.173.77:8000/api/courses?subfield=${this.props.match.params.subfield}`)
            .then((resp) => {
                this.setState({
                    courses: resp.data.map((item) => {
                        return {
                            img: item.img_thumbnail,
                            organization: item.organization_name,
                            organizationImg: item.organization_img,
                            organizationUrl: item.organization_url,
                            level: {
                                RU: item.level_ru,
                                EN: item.level,
                            },
                            name: {
                                RU: item.title_ru,
                                EN: item.title,
                            },
                            description: {
                                RU: item.description_ru,
                                EN: item.description,
                            },
                            url: item.id,
                            tags: {
                                RU: item.tags_ru,
                                EN: item.tags,
                            },
                            supportedLanguages: item.supported_languages,       
                        };
                    }),
                    isLoading: false,
                });
            });
        });
    }
    changeSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    };
    render(){
        return (
            <div className="courses">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                {/* <Header language={this.props.language} locale={this.props.locale}/>*/}
                
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