import React, { Component } from "react";
import SubFieldsBanner from "./SubFieldsBanner";
import SubFieldsList from "./SubFieldsList";
import Header from "../Header";
import axios from "axios";


class SubFields extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            name:"",
            description: "",
            img: "",
            subfields: [
            ],
        };
    }
    componentDidMount = () => {
        this.setState({
            isLoading: true
        });
        axios.get(`http://67.205.173.77:8000/api/fields?id=${this.props.match.params.field}`)
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
            axios.get(`http://67.205.173.77:8000/api/subfields?field=${this.props.match.params.field}`)
            .then((resp) => {
                this.setState({
                    subfields: resp.data.map((item) => {
                        return {
                            img: item.img_thumbnail,
                            name: {
                                RU: item.title_ru,
                                EN: item.title,
                            },
                            description: {
                                RU: item.description_ru,
                                EN: item.description,
                            },
                            url: item.id          
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
            <div className="subfields">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                {/*<Header language={this.props.language} locale={this.props.locale} localeChange={this.props.localeChange}/> */}
                
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