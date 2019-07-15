import React, {Component} from "react";
import Banner from "./Banner";
import NewsLanding from "./NewsLanding";
import AboutUsLanding from "./AboutUsLanding";
import Header from "../Header";

/* 
 {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },*/
class Landing extends Component{
    constructor(props){
        super(props);
        this.news = [
                {
                    header: "We launched",
                    header_ru: "Мы запустились",
                    description: "haha",
                    description_ru: "Ура",
                    date: "6/29/2019",
                    thumbnail: "volk.jpg",
                },
            ];
    
    }
    render(){
        return(
            <div className="landing">
                {/*<Header language={this.props.language} locale={this.props.locale} localeChange={this.props.localeChange}/> */}
                <Banner language={this.props.language} locale={this.props.locale}/>
                <NewsLanding news={this.news} language={this.props.language} locale={this.props.locale}/>
                <AboutUsLanding language={this.props.language} locale={this.props.locale}/>
            </div>
        );
    }

};


export default Landing;