////pour intégrer une image depuis la balise <img> il faut qu'elle soit stockée dans "Public" et partir du chemin comme si on était dans index.html
// Intégrer une image de fond depuis Sass: doit être stockée dans 'src' : ../... depuis sass jusqu'à l'image


import React from 'react';

const Logo = () => {
  return (
    <div id='logo'>
      <img src="./logo192.png" alt="logo-react" />
      <h2>React World</h2>
    </div>
  );
};

export default Logo;
