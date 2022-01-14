import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {

  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat debitis amet ullam. Dignissimos repellendus consequatur temporibus, obcaecati minus architecto nostrum, quo ipsam corporis, harum qui? Odit, cum. Modi, vero?");

  const [editText, setEditText] = useState(false);

  return (
    <div className="about-container">
      <Logo />
      <Navigation />

      <h1>About</h1>

      {editText ? (
        <>
          <textarea onChange={(e) => setText(e.target.value)} defaultValue={text} cols="60" rows="3"></textarea><br />
          <button onClick={() => setEditText(false)}>Valider édition</button>
        </>
      ) : (
        <>
          <p>{text}</p>
          <button onClick={() => setEditText(true)}>Editer texte</button>
        </>
      )}

    </div >
  );
};

export default About;