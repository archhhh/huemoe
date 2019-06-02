import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-lists">
                <ul>
                    <li className="title">Mission</li>
                    <li>Блять, да мне похуй на тебя, блять, слушай, какая у тебя там тачка, блять, квартиры, срачки там блять, яхты, всё, мне похуй</li>
                </ul>
                <ul>
                    <li className="title">Sitemap</li>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link exact to="/">Courses</Link></li>
                    <li><Link exact to="/">About Us</Link></li>
                </ul>
                <ul>
                    <li className="title">Location</li>
                    <li>Ding Dong, Texas, United States</li>
                </ul>

                <ul>
                    <li className="title">Email</li>
                    <li>dimadebila@mail.ru</li>
                </ul>
            </div>
            <div className="footer-socials">
                <p><a href=""><i class="fab fa-facebook"></i></a><a href=""><i class="fab fa-telegram"></i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fab fa-instagram"></i></a></p>
                <p>© 2019. Designed and Developed by Distinctive Themes</p>
            </div>
        </footer>
    );
};

export default Footer;