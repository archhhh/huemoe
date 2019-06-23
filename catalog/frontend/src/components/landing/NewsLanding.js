import React from "react";


const NewsLanding = (props) => {
    return (
        <div className="news-landing">
            <h1>{props.language[props.locale].landingPage.news}</h1>
            <ul className="news-landing-list">
                { props.news.map((news) => (
                    <li className="news-landing-item">
                        <img src={news.thumbnail}></img>
                        <div className="news-landing-text">
                            <h2>{news.header}</h2>
                            <p>{news.description}</p>
                        </div>
                    </li>                    
                )) }
            </ul>
        </div>
    );
};

export default NewsLanding;