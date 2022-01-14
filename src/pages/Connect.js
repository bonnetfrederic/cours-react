// Créer une page Connect.js

// Rattacher la page au routeur et à la navigation

// Créer 2 boutons (s'inscrire / se connecter)

// Conditionner l'affichage dans un ternaire

// Créer un composant s'inscrire: 3 inputs pseudo, mdp, confirm mdp

// Créer un composant se connecter: 2 inputs pseudo, mdp

// BONUS:
// 1. controler que mdp = 8 caractères et que les 2 correspondent
//  -> voir la correction de Julien
// 2. changer la couleur des boutons selon surlequel on se trouve
//    ex: style={{background: ternaire ? "couleur1" : "couleur2"}}
//  -> voir la correction de Julien

import React, { useState } from 'react';
import Inscription from '../components/Inscription';
import Connection from '../components/Connection';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Connect = () => {
  const [inscr, setInscr] = useState(true);
  return (
    <div className="connect-container">
      <Logo />
      <Navigation />
      <div className="buttons" id="buttons">
        <button onClick={() => setInscr(true)} id='inscr'>S'inscrire</button>
        <button onClick={() => setInscr(false)} id='con'>Se connecter</button>
      </div>
     
      {inscr ? <Inscription /> : <Connection />}

    </div>
  );
};

export default Connect;