import React from "react";


const SubFieldsBanner = () => {
    return (
        <div className="subfields-banner">
            <img src={require("../../../assets/csbanner.jpg")} />
            <div className="subfields-banner-text">
                <h1>Computer Science</h1>
                <p>Study of computers and computational systems</p>
            </div>
        </div>
    );
};

export default SubFieldsBanner;