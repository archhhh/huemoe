import { Link } from "react-router-dom";
import React, { Component } from "react";


const links = [
  {
      path: '#', 
      text: 'Catalog',
  },
  {
      path: '#', 
      text: 'About Us',
  },
];

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            links: new Array(links.length).fill(false),
            catalog: [
                {
                    url: "/fields/cs",
                    label: "Computer Science"
                },
                {
                    url: "/fields/chemistry",
                    label: "Chemistry"
                },
                {
                    url: "/fields/Physics",
                    label: "Physics"
                },
            ],
        };
    }
    toggleLink = (id, value) => {
        this.setState({
            links: this.state.links.map((link, i) => i === id ? value : false),
        });
    };
    render(){
        return (
            <nav className="navbar">
                <h1 class="logo">
                    <Link to="/">HAHAYES</Link>
                </h1>
                <button type="button" className="navbar-toggle">
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span>
                        <span className="navbar-toggle-bar"></span> 
                </button>
                <ul className="navbar-links">
                    {
                        links.map((link, i) => {
                            if(link.text !== "Catalog"){
                                return <li className="navbar-link"><Link exact to={link.path}>{link.text}</Link></li>;
                            }else{
                                return (
                                    <li className="navbar-link-dropdown">
                                        <p onClick={() => {this.toggleLink(i, !this.state.links[i])}}>{link.text}</p>
                                        <ul className={this.state.links[i] ? "navbar-dropdown-links-open" : "navbar-dropdown-links-closed"}>
                                            { this.state.catalog.map( (item) => (
                                                <li className="navbar-dropdown-link"><Link exact to={item.url}>{item.label}</Link></li>
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