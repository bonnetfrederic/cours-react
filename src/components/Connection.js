import React from 'react';

const Connection = () => {
  return (
    <div id='connection-container'>
      <h3>Connectez-vous</h3>
      <form action="">
        <label htmlFor="pseudo" id='label-pseudo'>Pseudo</label>
        <input type="text" name="pseudo" id="pseudo" />
        <label htmlFor="mdp1">Mot de passe</label>
        <input type="password" name="mdp1" id="mdp1" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Connection;