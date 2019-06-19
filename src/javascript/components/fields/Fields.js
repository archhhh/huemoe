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
                    name: "Камблюктер саенс",
                    description: "Как взломать жопу",
                    url: "/fields/cs",
                },
                {
                    img: "chemistry.jpg",
                    name: "Chemistry",
                    description: "Химия химия",
                    url: "/fields/chemistry",
                },
                {
                    img: "arts.jpg",
                    name: "Arts",
                    description: "тут не научат находить работу",
                    url: "/fields/arts",
                },
                {
                    img: "math.jpg",
                    name: "Math",
                    description: "нахуй мне интегралы в макдаке",
                    url: "/fields/math",
                },
            ],
        };
    }
    changeSearchValue = (value) => {
        this.setState({
            searchValue:value,
        });
    };
    render(){
        return (
            <div className="fields">
                <Header />
                <FieldsBanner/>
                <FieldsList fields = {this.state.fields} changeSearchValue = {this.changeSearchValue} searchValue = {this.state.searchValue}/>
            </div>
        );
    }
}; 

export default Fields;