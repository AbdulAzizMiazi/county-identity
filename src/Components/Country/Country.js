import React from 'react';
import {Link} from "react-router-dom";

const Country = (props) => {
    const {name, area, population, alpha3Code} = props.country;
    const countryStyle={
        margin:"20px",
        padding:"10px",
        border:"4px solid purple",
        borderRadius:"8px",
        fontSize:"18px"
    }
    const goTo = `/country/${name}`;
    
    return (
        <div style={countryStyle}>

            <h3 style={{margin:"0px", color:"skyBlue", textDecoration:"none"}}>
                <Link to={goTo}> {name} </Link>
            </h3>
            <p>Area: <span style={{fontSize:"15px"}}> {area}</span></p>
            <p>Population: <span style={{fontSize:"15px"}}>{population}</span></p>
            <p>Alpha3Code: <span style={{fontSize:"15px"}}>{alpha3Code}</span></p>
           <Link to={goTo}><button>More Info.</button></Link>
        
        </div>
    );
};

export default Country;