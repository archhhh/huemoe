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
                name: this.props.locale === "EN" 
                      ? resp.data[0].title 
                      : resp.data[0]["title_"+this.props.locale.toLowerCase()] 
                        ? resp.data[0]["title_"+this.props.locale.toLowerCase()]
                        : resp.data[0].title,
                description: this.props.locale === "EN" 
                             ? resp.data[0].description 
                             : resp.data[0]["description_"+this.props.locale.toLowerCase()] 
                                ? resp.data[0]["description_"+this.props.locale.toLowerCase()]
                                : resp.data[0].description,
                img: resp.data[0].img_banner       
            });
            axios.get(`http://67.205.173.77:8000/api/courses?subfield=${this.props.match.params.subfield}`)
            .then((resp) => {
                this.setState({
                    courses: resp.data.map((item) => {
                        if(item.supported_languages.find((item) => item === this.props.locale && item !== "EN"))
                            return {
                                img: item.img_thumbnail,
                                organization: item.organization_name,
                                organizationImg: item.organization_img,
                                organizationUrl: item.organization_url,
                                level: item["level_"+this.props.locale.toLowerCase()],
                                name: item["title_"+this.props.locale.toLowerCase()],
                                description: item["description_"+this.props.locale.toLowerCase()],
                                url: item.id,
                                tags: item["tags_"+this.props.locale.toLowerCase()],
                                supportedLanguages: item.supported_languages,       
                            };
                        else
                            return {
                                img: item.img_thumbnail,
                                organization: item.organization_name,
                                organizationImg: item.organization_img,
                                organizationUrl: item.organization_url,
                                level: item.level,
                                name: item.title,
                                description: item.description,
                                url: item.id,
                                tags: item.tags,
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