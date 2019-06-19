import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Footer from "./Footer";
import Fields from "./fields/Fields";
import SubFields from "./subfields/SubFields";
import Courses from "./courses/Courses";
import Course from "./course/Course";
import ContactUsLanding from "./landing/ContactUsLanding";


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/fields" component={Fields} />
                    <Route exact path="/fields/:field" component={SubFields} />
                    <Route exact path="/fields/:field/:subfield" component={Courses} />
                    <Route exact path="/fields/:field/:subfield/:course" component={Course} />
                    <ContactUsLanding />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;