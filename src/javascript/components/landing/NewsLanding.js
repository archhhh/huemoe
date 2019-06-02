import React from "react";
import volk from "../../../assets/volk.jpg";


const NewsLanding = (props) => {
    return (
        <div className="news-landing">
            <h1>А что вы делаете в моем холодильнике</h1>
            <ul className="news-landing-list">
                <li className="news-landing-item">
                    <img src={volk}></img>
                    <div className="news-landing-text">
                        <h2>Волк не волк</h2>
                        <p>Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке</p>
                    </div>
                </li>
                <li className="news-landing-item">
                    <img src={volk}></img>
                    <div className="news-landing-text">
                        <h2>Волк не волк</h2>
                        <p>Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке</p>
                    </div>
                </li>
                <li className="news-landing-item">
                    <img src={volk}></img>
                    <div className="news-landing-text">
                        <h2>Волк не волк</h2>
                        <p>Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке</p>
                    </div>
                </li>
                <li className="news-landing-item">
                    <img src={volk}></img>
                    <div className="news-landing-text">
                        <h2>Волк не волк</h2>
                        <p>Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NewsLanding;