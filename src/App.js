import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Connect from './pages/Connect';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<Home />} />  {/*Si jamais aucune des routes ne correspond, on renvoie à l'accueil. On peut aussi créer une page Erreur 404 est rediriger vers cette page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;