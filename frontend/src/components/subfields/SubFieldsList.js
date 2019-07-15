import React from "react";
import { Link } from "react-router-dom";


const SubFieldsList = (props) => {
    return (
        <div className="subfields-list">
            <div className="subfields-filters">
                <input type="text" placeholder={props.language[props.locale].subfields.searchPlaceholder} value={props.searchValue} onChange={props.changeSearchValue}/>
            </div>
            <ul>
                { props.subfields.map((subfield) => 
                    <li>
                        <Link to={"/subfields/"+subfield.url}>
                            <div>
                                <img src={subfield.img}></img>
                            </div>
                            <h2>{subfield.name[props.locale]}</h2>
                            <p>{subfield.description[props.locale]}</p>
                        </Link>
                    </li>                
                )}
            </ul>
        </div>
    );
};

export default SubFieldsList;