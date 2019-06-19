import React, {Component} from "react";
import Banner from "./Banner";
import NewsLanding from "./NewsLanding";
import AboutUsLanding from "./AboutUsLanding";
import Header from "../Header";


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [
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
                },
            ],
        };
    }
    render(){
        return(
            <div className="landing">
                <Header />
                <Banner />
                <NewsLanding news={this.state.news}/>
                <AboutUsLanding />
            </div>
        );
    }

};


export default Landing;