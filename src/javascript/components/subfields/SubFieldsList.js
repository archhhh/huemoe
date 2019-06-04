import React from "react";
import { Link } from "react-router-dom";


const SubFieldsList = () => {
    return (
        <div className="subfields-list">
            <ul>
                <li>
                    <Link to="/fields/cs/ml">
                        <div>
                            <img src={require("../../../assets/ml.png")}></img>
                        </div>
                        <h2>Machine Learning</h2>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/os.jpg")}></img>
                        </div>
                        <h2>Operating Systems</h2>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/algorithms.jpg")}></img>
                        </div>
                        <h2>Algorithms & Data Structures</h2>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <div>
                            <img src={require("../../../assets/networks.jpg")}></img>
                        </div>
                        <h2>Computer Networks</h2>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SubFieldsList;