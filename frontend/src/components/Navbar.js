import { Link } from "react-router-dom";
import React, { Component } from "react";




class Navbar extends Component {
    constructor(props){
        super(props);
        this.links = [
            {
                path: '#', 
                text: this.props.language[this.props.locale].navigation.catalog,
            },
            {
                path: '/about-us', 
                text: this.props.language[this.props.locale].navigation.aboutUs,
            },
        ];
        this.state = {
            toggleButton: false,
            links: new Array(this.links.length).fill(false),
            catalog: [
                {
                    url: "/fields/cs",
                    label: {
                        RU: "Информатика",
                        EN: "Computer Science",
                    }
                },
                {
                    url: "/fields/chemistry",
                    label: {
                        RU: "Химия",
                        EN: "Chemistry",
                    },
                },
                {
                    url: "/fields/math",
                    label: {
                        RU: "Математика",
                        EN: "Math",
                    },
                },
            ],
        };

    }
    toggleLink = (id, value) => {
        this.setState({
            links: this.state.links.map((link, i) => i === id ? value : false),
        });
    };
    toggleButton = () => {
        this.setState({
            toggleButton: !this.state.toggleButton,
        });
    };
    render(){
        return (
            <nav className="navbar">
                <h1 class="logo">
                    <Link to="/">HAHAYES</Link>
                </h1>
                <button type="button" className="navbar-toggle" onClick={this.toggleButton}>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span> 
                </button>
                <ul className={this.state.toggleButton ? "navbar-links open" : "navbar-links"}>
                    {
                        this.links.map((link, i) => {
                            if(link.text !== this.props.language[this.props.locale].navigation.catalog){
                                return <li className="navbar-link"><Link exact to={link.path}>{link.text}</Link></li>;
                            }else{
                                return (
                                    <li className="navbar-link-dropdown">
                                        <p onClick={() => {this.toggleLink(i, !this.state.links[i])}}>{link.text}</p>
                                        <ul onClick={() => {this.toggleLink(i, !this.state.links[i])}} className={this.state.links[i] ? "navbar-dropdown-links-open" : "navbar-dropdown-links-closed"}>
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