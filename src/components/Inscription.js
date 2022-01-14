import React from 'react';

const Inscription = () => {
  return (
    <div id='inscription-container'>
      <h3>Inscrivez-vous</h3>
      <form action="">
        <label htmlFor="pseudo" id='label-pseudo'>Pseudo</label>
        <input type="text" name="pseudo" id="pseudo" />
        <label htmlFor="mdp1">Mot de passe</label>
        <input type="password" name="mdp1" id="mdp1" />
        <label htmlFor="mdp2">Confirmer mot de passe</label>
        <input type="password" name="mdp1" id="mdp2" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Inscription;