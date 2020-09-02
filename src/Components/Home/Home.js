import React, { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Country from '../Country/Country';
const Home = () => {
    const [allCountries, setAllCountries] = useState([]);   
    useEffect(()=>{
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(data => setAllCountries(data))
    }, [])
    return (
        <div>
            {
                allCountries.map(country =><Country key={country.name} country={country}/>)
            }
        </div>
    );
};

export default Home;