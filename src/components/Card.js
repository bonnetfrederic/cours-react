import React from 'react';

const Card = ( {country} ) => {
  return (
    <div className="card">
      <h2>{country.translations.fra.common}</h2>
      <img src={country.flags.svg} alt={"drapeau " + country.name.common} />
      <p>{country.capital}</p>
      <p>Pop: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default Card;