import React from 'react'
import weleda from '../images/weleda.PNG';
import { useState } from "react";

function Kontakt() {

  const [showMessage, setShowMessage] = useState(false);


  const poruka = (event) => {
    event.preventDefault();
    setShowMessage(true);
    alert("Poruka je uspesno poslata.");
    event.target.reset();
  };

  return (
      <div className='kontakt'>
          <div className='kontaktLeftColumn'>
              <h2>Imate pitanje? Pišite nam!</h2>
              <form id='kontaktForm' onSubmit={poruka}>
                  <label htmlFor='ime'>Ime</label>
                  <br></br>
                  <input name='ime' placeholder='Unesite ime...' type='text' required />
                  <label htmlFor='prezime'>Prezime</label>
                  <br></br>
                  <input name='prezime' placeholder='Unesite prezime...' type='text' required />
                  <label htmlFor='email'>Email adresa</label>
                  <br></br>
                  <input name='email' placeholder='Unesite email adresu...' type='email' required />
                  <label htmlFor='komentar'>Poruka</label>
                  <textarea name='komentar' rows='5' placeholder='Unesite poruku...' required></textarea>
                  <button type='submit'>Pošalji</button>
                  {showMessage}
              </form>
          </div>

          <div className='kontaktRightColumn' style={{ backgroundImage : `url(${weleda})` }}></div>
    </div>
  )
}

export default Kontakt