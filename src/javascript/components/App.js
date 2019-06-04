import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Footer from "./Footer";
import Fields from "./fields/Fields";
import SubFields from "./subfields/SubFields";
import Courses from "./courses/Courses";


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/fields" component={Fields} />
                    <Route exact path="/fields/:subfield" component={SubFields} />
                    <Route exact path="/fields/:subfield/:course" component={Courses} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;