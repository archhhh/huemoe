import React from "react";
import { Link } from "react-router-dom";


const SubFieldsList = () => {
    return (
        <div className="subfields-list">
            <div className="subfields-filters">
                <input type="text" placeholder="Search"/>
            </div>
            <ul>
                <li>
                    <Link to="/fields/cs/ml">
                        <div>
                            <img src={require("../../../assets/ml.png")}></img>
                        </div>
                        <h2>Machine Learning</h2>
                        <p>Field of study that gives computers the capability to learn without being explicitly programmed</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/os.jpg")}></img>
                        </div>
                        <h2>Operating Systems</h2>
                        <p>Study of the basic facilities provided in modern Operating Systems</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/algorithms.jpg")}></img>
                        </div>
                        <h2>Algorithms & Data Structures</h2>
                        <p>Study of algorithms and data organization, management</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/networks.jpg")}></img>
                        </div>
                        <h2>Computer Networks</h2>
                        <p>Study of computer communications</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SubFieldsList;