import React from "react";
import { Link } from "react-router-dom";


const FieldsList = () => {
    return (
        <div className="fields-list">
            <ul>
                <li>
                    <Link exact to="/fields/cs">
                        <div className="fields-item-img">
                            <img src={require("../../../assets/cs.jpg")}></img>
                        </div>
                        <div className="fields-item-text">
                                <h2>Камблюктер саенс</h2>
                                <div className="line"></div>
                                <p>Как взломать жопу</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link exact to="/fields/chemistry">
                        <div className="fields-item-img">
                            <img src={require("../../../assets/chemistry.jpg")}></img>
                        </div>
                        <div className="fields-item-text">
                            <h2>Chemistry</h2>
                            <div className="line"></div>
                            <p>Химия химия</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link exact to="/fields/arts">
                        <div className="fields-item-img">
                            <img src={require("../../../assets/arts.jpg")}></img>
                        </div>
                        <div className="fields-item-text">
                            <h2>Arts</h2>
                            <div className="line"></div>
                            <p>тут не научат находить работу</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link exact to="/fields/math">
                        <div className="fields-item-img">
                            <img src={require("../../../assets/math.jpg")}></img>
                        </div>    
                        <div className="fields-item-text">               
                            <h2>Math</h2>
                            <div className="line"></div>
                            <p>нахуй мне интегралы в макдаке</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FieldsList;