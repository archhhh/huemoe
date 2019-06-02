import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Header from "./Header";
import Footer from "./Footer";


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;