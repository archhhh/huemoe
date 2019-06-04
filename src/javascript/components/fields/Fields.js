import React, { Component } from "react";
import FieldsBanner from "./FieldsBanner";
import FieldsList from "./FieldsList";
import Header from "../Header";


class Fields extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="fields">
                <Header />
                <FieldsBanner/>
                <FieldsList />
            </div>
        );
    }
}; 

export default Fields;