import React, { Component } from "react";
import SubFieldsBanner from "./SubFieldsBanner";
import SubFieldsList from "./SubFieldsList";
import Header from "../Header";


class SubFields extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="subfields">
                <Header />
                <SubFieldsBanner />
                <SubFieldsList />
            </div>
        );
    }
}; 

export default SubFields;