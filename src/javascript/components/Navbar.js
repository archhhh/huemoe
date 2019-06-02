import { Link } from "react-router-dom";
import React, { Component } from "react";


const links = [
  {
      path: '#', 
      text: 'Catalog',
      dropdown: [
            {
                path: '#', 
                text: 'Computer Science',
            },
            {
                path: '#', 
                text: 'Chemistry',
            },
            {
                path: '#', 
                text: 'Math',
            },
      ]
  },
  {
      path: '#', 
      text: 'About Us',
      dropdown: [],
  },
];

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            links: new Array(links.length).fill(false),
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
                            if(link.dropdown.length === 0){
                                return <li className="navbar-link"><Link exact to={link.path}>{link.text}</Link></li>;
                            }else{
                                return (
                                    <li className="navbar-link-dropdown">
                                        <p onClick={() => {this.toggleLink(i, !this.state.links[i])}}>{link.text}</p>
                                        <ul className={this.state.links[i] ? "navbar-dropdown-links-open" : "navbar-dropdown-links-closed"}>{ link.dropdown.map( (dropdownLink) => (
                                            <li className="navbar-dropdown-link"><Link exact to={dropdownLink.path}>{dropdownLink.text}</Link></li>
                                        ) )}</ul>
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