import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [rangeValue, setRangeValue] = useState(12);

  // lancer une action quand le composant s emonte, avec un hook useEffect
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountriesData(res.data))
  }, []);

  return (
    <div className="home-container">
      <Logo />
      <Navigation />
      <input type="range" min="1" max="250" onChange={e => setRangeValue(e.target.value)} />
      <span>{rangeValue}</span>
      <div className="countries">
        {countriesData &&
          countriesData
            // .filter((country) => country.region === "Asia")
            // .filter((country) => country.region.includes("Asia"))
            // .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country) => (
              <Card country={country} key={country.cca3} />
            ))}
      </div>
    </div>
  );
};

export default Home;
