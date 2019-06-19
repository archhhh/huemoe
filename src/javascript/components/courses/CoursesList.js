import React from "react";
import { Link } from "react-router-dom";


const CoursesList = () => {
    return (
        <div className="courses-list">
            <div className="courses-filters">
                <input type="text" placeholder="Search"/>
                <div className="courses-select">
                    <button className="courses-select-input-left-button">Level</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>
                <div className="courses-select">
                    <button className="courses-select-input-left-button">Organization</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>
            </div>
            <ul>
                <li>
                    <Link exact to="/fields/cs/ml/stanford-machine-learning">
                        <div className="courses-item-img">
                            <img src={require("../../../assets/stanford-ml.jpg")}></img>
                        </div>
                        <div className="courses-item-text">
                                <div className="courses-profile">   
                                    <img src={require("../../../assets/stanford.jpg")} />
                                    <p>Stanford University</p>
                                </div>
                                <div className="line"></div>
                                <div className="courses-info">
                                    <h2>Machine Learning</h2>
                                    <p className="courses-level">Beginner</p>
                                    <p className="courses-tags"><span>machine learning</span><span>deep learning</span></p>
                                    <p className="courses-description">This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition.</p>
                                </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link exact to="#">
                        <div className="courses-item-img">
                            <img src={require("../../../assets/deeplearningai-ai4e.jpg")}></img>
                        </div>
                        <div className="courses-item-text">
                                <div className="courses-profile">   
                                    <img src={require("../../../assets/deeplearningai.jpg")} />
                                    <p>deeplearning.ai</p>
                                </div>
                                <div className="line"></div>
                                <div className="courses-info">
                                    <h2>Deep Learning</h2>
                                    <p className="courses-level">Intermediate</p>
                                    <p className="courses-tags"><span>machine learning</span><span>deep learning</span></p>
                                    <p className="courses-description">Deep Learning is one of the most highly sought after skills in tech. We will help you become good at Deep Learning.</p>
                                </div>
                        </div>
                    </Link>
                </li>
                
            </ul>
        </div>
    );
};

export default CoursesList;