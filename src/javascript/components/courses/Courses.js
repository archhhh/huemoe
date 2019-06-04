import React, { Component } from "react";
import CoursesBanner from "./CoursesBanner";
import CoursesList from "./CoursesList";
import Header from "../Header";


class Courses extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="courses">
                <Header />
                <CoursesBanner/>
                <CoursesList />
            </div>
        );
    }
}; 

export default Courses;