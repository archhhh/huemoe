import React from "react";
import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-lists">
                <ul>
                    <li className="title">{props.language[props.locale].landingPage.footerGoal}</li>
                    <li>{props.language[props.locale].landingPage.footerGoalContent}</li>
                </ul>
                <ul>
                    <li className="title">{props.language[props.locale].landingPage.footerSiteMap}</li>
                    <li><Link exact to="/">{props.language[props.locale].landingPage.footerSiteMapHome}</Link></li>
                    <li><Link exact to="/fields">{props.language[props.locale].landingPage.footerSiteMapCatalog}</Link></li>
                    <li><Link exact to="/about-us">{props.language[props.locale].landingPage.footerSiteMapAboutUs}</Link></li>
                </ul>
                <ul>
                    <li className="title">{props.language[props.locale].landingPage.footerSiteMapLocation}</li>
                    <li>{props.language[props.locale].landingPage.footerSiteMapLocationContent}</li>
                </ul>

                <ul>
                    <li className="title">{props.language[props.locale].landingPage.footerSiteMapContacts}</li>
                    <li>{props.language[props.locale].landingPage.footerSiteMapContactsEmail}</li>
                </ul>
            </div>
            <div className="footer-socials">
                <p><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-telegram"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a></p>
                <p>© 2019. Designed and Developed by Distinctive Themes</p>
            </div>
        </footer>
    );
};

export default Footer;