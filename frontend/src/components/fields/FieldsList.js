import React from "react";
import { Link } from "react-router-dom";


const FieldsList = (props) => {
    return (
        <div className="fields-list">
            <div className="fields-filters">
                <input type="text" placeholder={props.language[props.locale].fields.searchPlaceholder} value={props.searchValue} onChange={props.changeSearchValue}/>
            </div>
            <ul>
                { props.fields.map((field) => (
                    <li>
                        <Link exact to={"/fields/"+field.url}>
                            <div className="fields-item-img">
                                <img src={field.img}></img>
                            </div>
                            <div className="fields-item-text">
                                    <h2>{field.name}</h2>
                                    <div className="line"></div>
                                    <p>{field.description}</p>
                            </div>
                        </Link>
                    </li>                    
                ))}
            </ul>
        </div>
    );
};

export default FieldsList;