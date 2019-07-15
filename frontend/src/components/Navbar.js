import { Link } from "react-router-dom";
import React, { Component } from "react";
import {LOCALES} from "../utils/locales";
import axios from "axios";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            toggleButton: false,
            links: [
                {
                    path: '#', 
                    text: this.props.language[this.props.locale].navigation.catalog,
                },
                {
                    path: '/about-us', 
                    text: this.props.language[this.props.locale].navigation.aboutUs,
                },
            ],
            linksOpen: new Array(2).fill(false),
            language: false,
            catalog: [
            ],
        };
    }
    componentDidMount = () => {
        this.setState({
            isLoading: true,
        });
        axios.get(`http://67.205.173.77:8000/api/fields`)
        .then((resp) => {
            console.log(resp.data);
            this.setState({
                isLoading: false,
                catalog: resp.data.map((item) => {
                    return {
                        img: item.img_thumbnail,
                        label: {
                            RU: item.title_ru,
                            EN: item.title   
                        },
                        url: "/fields/"+item.id                 
                    };
                })
            });
        });
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.locale != this.props.locale){
            this.setState({
                links: [
                    {
                        path: '#', 
                        text: this.props.language[this.props.locale].navigation.catalog,
                    },
                    {
                        path: '/about-us', 
                        text: this.props.language[this.props.locale].navigation.aboutUs,
                    },
                ]
            });
        }
    }
    toggleLink = (id, value) => {
        this.setState({
            linksOpen: this.state.linksOpen.map((link, i) => i === id ? value : false),
            language: false,
        });
    };
    toggleButton = () => {
        this.setState({
            toggleButton: !this.state.toggleButton,
        });
    };
    toggleLanguage = (toggle) => {
        this.setState({
            language: toggle,
            linksOpen: new Array(2).fill(false),
        });
    }
    render(){
        let languages = [];
        LOCALES.forEach((item) => {
            if(item !== this.props.locale)
                languages.push(
                    <li key={item} className="language-dropdown-link" onClick={() => this.props.localeChange(item)}>{item}</li>
                );
        });
        return (
            <nav className="navbar">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                <h1 className="logo">
                    <Link to="/">HAHAYES</Link>
                </h1>
                <div className="language">
                    <p onClick={() => {this.toggleLanguage(!this.state.language)}}>{this.props.locale}</p>
                    <ul onClick={() => {this.toggleLanguage(false)}} className={this.state.language ? "language-dropdown-open" : "language-dropdown-closed"}>
                        {languages}
                    </ul>
                </div>
                <button type="button" className="navbar-toggle" onClick={this.toggleButton}>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span> 
                </button>

                <ul className={this.state.toggleButton ? "navbar-links open" : "navbar-links"}>
                    {
                        this.state.links.map((link, i) => {
                            if(link.text !== "каталог" && link.text !== "catalog"){
                                return <li className="navbar-link"><Link exact to={link.path}>{link.text}</Link></li>;
                            }else{
                                return (
                                    <li className="navbar-link-dropdown">
                                        <p onClick={() => {this.toggleLink(i, !this.state.linksOpen[i])}}>{link.text}</p>
                                        <ul onClick={() => {this.toggleLink(i, !this.state.linksOpen[i])}} className={this.state.linksOpen[i] ? "navbar-dropdown-links-open" : "navbar-dropdown-links-closed"}>
                                            { this.state.catalog.map( (item) => (
                                                <li className="navbar-dropdown-link"><Link exact to={item.url}>{item.label[this.props.locale]}</Link></li>
                                            ) )}
                                        </ul>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>

            </nav>
        );
    }
};

export default Navbar;