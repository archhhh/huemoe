import React from "react";
import Navbar from "./Navbar";


const Header = (props) => {
    return (
        <header>
            <Navbar language={props.language} locale={props.locale} localeChange={props.localeChange}/>
        </header>
    );
};

export default Header;