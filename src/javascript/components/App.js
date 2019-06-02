import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Banner />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;