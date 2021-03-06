import React from "react";


const NewsLanding = (props) => {
    return (
        <div className="news-landing">
            <h1>{props.language[props.locale].landingPage.news}</h1>
            { props.news.length === 0 
              ? (
                    <div>
                        <h2>{props.language[props.locale].landingPage.newsEmpty}</h2>
                    </div>
                ) 
              : (
                <ul className="news-landing-list">
                    { props.news.map((news) => (
                        <li className="news-landing-item">
                            <img src={"/static/frontend" + news.thumbnail}></img>
                            <div className="news-landing-text">
                                <h2>{ props.locale === "EN" ? news.header : news["header_"+props.locale.toLowerCase()]}</h2>
                                <p className="news-date">{news.date}</p>
                                <p>{ props.locale === "EN" ? news.description : news["description_"+props.locale.toLowerCase()]}</p>
                            </div>
                        </li>                    
                    )) }
                </ul>
              )
              
            }
        </div>
    );
};

export default NewsLanding;