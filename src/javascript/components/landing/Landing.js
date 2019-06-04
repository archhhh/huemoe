import React, {Component} from "react";
import Banner from "./Banner";
import NewsLanding from "./NewsLanding";
import AboutUsLanding from "./AboutUsLanding";
import ContactUsLanding from "./ContactUsLanding";
import Header from "../Header";


class Landing extends Component{
    render(){
        return(
            <div className="landing">
                <Header />
                <Banner />
                <NewsLanding />
                <AboutUsLanding />
                <ContactUsLanding />
            </div>
        );
    }

};


export default Landing;