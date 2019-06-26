import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./landing/Landing";
import Footer from "./Footer";
import Fields from "./fields/Fields";
import SubFields from "./subfields/SubFields";
import Courses from "./courses/Courses";
import Course from "./course/Course";
import ContactUsLanding from "./landing/ContactUsLanding";
import AboutUs from "./aboutUs/AboutUs";
import {language} from "../utils/language";
import Error from "./error/Error";


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            locale: "RU",
        };
    }
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" render={(props) => <Course {...props} language={language} locale={this.state.locale} />}/>
                        <Route exact path="/fields" render={(props) => <Fields {...props} language={language} locale={this.state.locale} />} />
                        <Route exact path="/fields/:field" render={(props) => <SubFields {...props} language={language} locale={this.state.locale} />} />
                        <Route exact path="/fields/:field/:subfield" render={(props) => <Courses {...props} language={language} locale={this.state.locale} />} />
                        <Route exact path="/fields/:field/:subfield/:course" render={(props) => <Course {...props} language={language} locale={this.state.locale} />} />
                        <Route exact path="/about-us" render={(props) => <AboutUs {...props} language={language} locale={this.state.locale} />} />
                        <Route render={(props) => <Error {...props} language={language} locale={this.state.locale} />} />
                    </Switch>
                    <ContactUsLanding language={language} locale={this.state.locale}/>
                    <Footer language={language} locale={this.state.locale} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;