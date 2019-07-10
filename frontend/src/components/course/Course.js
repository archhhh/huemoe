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
            name: "Машинное Обучение",
            organization: "Cтэнфордский Университет",
            organizationImg: "stanford.jpg",
            organizationUrl: "#",
            instructor: "Эндрю Энг",
            instructorUrl: "#",
            level: "Начальный",
            tags: [
                "машинное обучение",
                "глубокое обучение"
            ],
            img: "",
            content: [
                [
                    {
                        name: "Вступление в курс",
                        type: "text",
                        data: "<h1>Вступление в курс</h1><p>Добро пожаловать на курс Машинного Обучения</p>",     
                        supplementaryMaterials: [
                            {
                                url: "#",
                                name: "слайды",
                            },
                            {
                                url: "#",
                                name: "конспекты",
                            }
                        ],
                    },
                    {
                        name: "Вступление в Машинное Обучение",
                        type: "video",
                        url: "2.mp4",
                        subtitles: {
                            label: "English",
                            lang: "en",
                            url: "2eng.vtt",
                        },
                        supplementaryMaterials: [
                            {
                                url: "#",
                                name: "слайды",
                            },
                            {
                                url: "#",
                                name: "конспекты",
                            }
                        ],
                    },
                    {
                        name: "Вступление в Машинное Обучение",
                        type: "video",
                        url: "2.mp4",
                        subtitles: {
                            label: "English",
                            lang: "en",
                            url: "2eng.vtt",
                        },
                        supplementaryMaterials: [
                            {
                                url: "#",
                                name: "слайды",
                            },
                            {
                                url: "#",
                                name: "конспекты",
                            }
                        ],
                    },
                    
                ],
            ],
            active: {
                x: 0,
                y: 0,
            },
            courseLocale: "EN",
        };
    }
    componentDidMount = () => {
        this.setState({
            isLoading: true
        });
        axios.get(`http://67.205.173.77:8000/api/courses?id=${this.props.match.params.course}`)
        .then((resp) => {
            if(resp.data[0].supported_languages.find((item) => item === this.state.courseLocale && item !== "EN"))
                this.setState({
                    img: resp.data[0].img_banner,
                    organization: resp.data[0].organization_name,
                    organizationImg: resp.data[0].organization_img,
                    organizationUrl: resp.data[0].organization_url,
                    instructor: resp.data[0].instructor,
                    instructorUrl: resp.data[0].instructor_url,
                    level: resp.data[0]["level_"+this.state.courseLocale.toLowerCase()],
                    name: resp.data[0]["title_"+this.state.courseLocale.toLowerCase()],
                    tags: item["tags_"+this.state.courseLocale.toLowerCase()], 
                });
            else
                this.setState({
                    img: resp.data[0].img_banner,
                    organization: resp.data[0].organization_name,
                    organizationImg: resp.data[0].organization_img,
                    organizationUrl: resp.data[0].organization_url,
                    instructor: resp.data[0].instructor,
                    instructorUrl: resp.data[0].instructor_url,
                    level: resp.data[0].level,
                    name: resp.data[0].title,
                    tags: resp.data[0].tags,
                    courseLocale: "EN", 
                });
            axios.get(`http://67.205.173.77:8000/api/contents?course=${this.props.match.params.course}`)
            .then((resp) => {
                console.log(resp);
                let content = [];
                resp.data.map((item) => {
                    if(!content[item.week-1])
                        content[item.week-1] = new Array();
                    content[item.week-1][item.order-1] = this.state.courseLocale === "EN" 
                                                          ? {
                                                            name: item.title,
                                                            type: item.content_type,
                                                            url: item.video,
                                                            data: item.text,    
                                                            subtitles: {
                                                                label: "English",
                                                                lang: "en",
                                                                url: item.subtitle,
                                                            },
                                                            supplementaryMaterials: item.supplementary_materials,
                                                          }
                                                          : {
                                                            name: item["title_"+this.state.courseLocale.toLowerCase()],
                                                            type: item.content_type,
                                                            url: item.video,
                                                            data: item["text_"+this.state.courseLocale.toLowerCase()],    
                                                            subtitles: {
                                                                label: LABELS[this.state.courseLocale],
                                                                lang: this.state.courseLocale.toLowerCase(),
                                                                url: item.subtitle["subtitle_"+this.state.courseLocale.toLowerCase()],
                                                            },
                                                            supplementaryMaterials: item.supplementary_materials,
                                                          };
                });
                this.setState({
                    content: content,
                    isLoading: false,
                });
            });
        });
    }
    pickActive = ( active ) => {
        this.setState({
            active: active,
        });
    }
    render(){
        return (
            <div className="course">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                <Header language={this.props.language} locale={this.props.locale} localeChange={this.props.localeChange}/>
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