import React, { Component } from "react";
import FieldsBanner from "./FieldsBanner";
import FieldsList from "./FieldsList";
import Header from "../Header";


class Fields extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            fields: [
                {
                    img: "cs.jpg",
                    name: {
                        RU: "Информатика",
                        EN: "Computer Science",
                    },
                    description: {
                        RU: "",
                        EN: "",
                    },
                    url: "/fields/cs",
                },
                {
                    img: "chemistry.jpg",
                    name: {
                        RU: "Химия",
                        EN: "Chemistry",
                    },
                    description: {
                        RU: "",
                        EN: "",
                    },
                    url: "/fields/chemistry",
                },
                {
                    img: "math.jpg",
                    name: {
                        RU: "Математика",
                        EN: "Math",
                    },
                    description: {
                        RU: "",
                        EN: "",
                    },
                    url: "/fields/math",
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
            <div className="fields">
                <Header language={this.props.language} locale={this.props.locale}/>
                <FieldsBanner language={this.props.language} locale={this.props.locale}/>
                <FieldsList 
                    fields = {this.state.fields} 
                    changeSearchValue = {this.changeSearchValue} 
                    searchValue = {this.state.searchValue}
                    language={this.props.language} 
                    locale={this.props.locale}
                />
            </div>
        );
    }
}; 

export default Fields;