import React, { Component } from "react";
import CourseBanner from "./CourseBanner";
import CourseNav from "./CourseNav";
import CourseContent from "./CourseContent";
import Header from "../Header";
import { LABELS } from "../../utils/locales";
import axios from "axios";


class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: { },
            organization: "",
            organizationImg: "",
            organizationUrl: "#",
            instructor: "",
            instructorUrl: "#",
            level: {},
            tags: [
            ],
            img: "",
            supportedLanguages: [],
            content: [
                [
                    {
                        name: {
                            RU: "",
                            EN: "",
                        },
                        type: "",
                        url: "",
                        data: {
                            RU: "",
                            EN: "",
                        },    
                        subtitles: {
                            RU: {
                                label: "Русский",
                                lang: "ru",
                                url: "",
                            },
                            EN:  {
                                label: "English",
                                lang: "en",
                                url: "",
                            },
                        },
                        supplementaryMaterials: "",
                    }
                ],
                
            ],
            active: {
                x: 0,
                y: 0,
            },
            courseLocale: this.props.locale,
        };
    }
    //${this.props.match.params.course}
    componentDidMount = () => {
        this.setState({
            isLoading: true
        });
        axios.get(`http://67.205.173.77:8000/api/courses?id=${this.props.match.params.course}`)
        .then((resp) => {
            this.setState({
                img: resp.data[0].img_banner,
                organization: resp.data[0].organization_name,
                organizationImg: resp.data[0].organization_img,
                organizationUrl: resp.data[0].organization_url,
                instructor: resp.data[0].instructor,
                instructorUrl: resp.data[0].instructor_url,
                level: {
                    RU: resp.data[0].level_ru,
                    EN: resp.data[0].level,
                },
                name:  {
                    RU: resp.data[0].title_ru,
                    EN: resp.data[0].title,
                },
                tags:  {
                    RU: resp.data[0].tags_ru,
                    EN: resp.data[0].tags,
                },
                supportedLanguages: resp.data[0].supported_languages,
            });
            if(resp.data[0].supported_languages.find((item) => item === this.state.courseLocale) == undefined)
                this.setState({
                    courseLocale: "EN", 
                });
            axios.get(`http://67.205.173.77:8000/api/contents?course=${this.props.match.params.course}`)
            .then((resp) => {
                let content = [];
                resp.data.map((item) => {
                    if(!content[item.week-1])
                        content[item.week-1] = new Array();
                    content[item.week-1][item.order-1] = {
                                                            name: {
                                                                RU: item.title_ru,
                                                                EN: item.title
                                                            },
                                                            type: item.content_type,
                                                            url: item.video,
                                                            data: {
                                                                RU: item.text_ru,
                                                                EN: item.text,
                                                            },    
                                                            subtitles: {
                                                                RU: {
                                                                    label: "Русский",
                                                                    lang: "ru",
                                                                    url: item.subtitle_ru,
                                                                },
                                                                EN:  {
                                                                    label: "English",
                                                                    lang: "en",
                                                                    url: item.subtitle,
                                                                },
                                                            },
                                                            supplementaryMaterials: item.supplementary_materials,
                                                        };
                });
                this.setState({
                    content: content,
                    isLoading: false,
                });
            }).catch((error) => {
                alert(`Something went wrong. ${error}`);
                this.setState({
                    isLoading: false
                });
            });
        }).catch((error) => {
            alert(`Something went wrong. ${error}`);
            this.setState({
                isLoading: false
            });
        });
    }
    pickActive = ( active ) => {
        this.setState({
            active: active,
        });
    }
    courseLocaleChange = (courseLocale) => {
        this.setState({
            courseLocale: courseLocale,
        });
    }
    render(){
        return (
            <div className="course">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                {/*<Header language={this.props.language} locale={this.props.locale} localeChange={this.props.localeChange}/> */}
                <CourseBanner 
                    name = {this.state.name}
                    organization = {this.state.organization}
                    organizationImg = {this.state.organizationImg}
                    organizationUrl = {this.state.organizationUrl}
                    instructor = {this.state.instructor}
                    instructorUrl = {this.state.instructorUrl}
                    courseLocale = {this.state.courseLocale}
                    level = {this.state.level}
                    tags = {this.state.tags}
                    language = {this.props.language}
                    img = {this.state.img}
                />
                <CourseNav
                    content={this.state.content}
                    active={this.state.active}
                    pickActive={this.pickActive}
                    courseLocale = {this.state.courseLocale}
                    language = {this.props.language}
                    courseLocaleChange = {this.courseLocaleChange}
                    supportedLanguages = {this.state.supportedLanguages}
                /> 
                <CourseContent 
                    content={ this.state.content[this.state.active.x][this.state.active.y]}
                    language = {this.props.language}
                    courseLocale = {this.state.courseLocale}
                />
            </div>
        );
    }
}; 

export default Course;