import React from 'react';
import './moreInfo.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const MoreInfo = () => {
    const {name} = useParams();
    const [country, setCountries] = useState([]);   
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data[0]))
    }, [])
    console.log(country);
    const{flag, population, area, nativeName, capital} = country;
    const flagTitle = `Flag Of ${name}`
    return (
        <div className="more-info">
            <img src={flag} alt="" title={flagTitle} />
            <h2>Name: {name}</h2>
            <p>Native Name: {nativeName}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <Link to="/"><button>Back To List</button></Link>
        </div>
    );
};

export default MoreInfo;