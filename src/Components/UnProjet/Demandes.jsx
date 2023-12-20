import React from 'react';

import './Demandes.css';

const Demandes = ({ demandes, contentClient }) => {
  return (
    <section className='demandes-container'>
      <h2 className='client-titre'>Le client</h2>
      <p className='client-content'>{contentClient}</p>

      <h2 className='demandes-titre'>Demandes du client</h2>

      {demandes.map((demande, index) => (
        <div key={index} className='demande-item'>
          <h3 className='demandes-nb'>{(index + 1).toString().padStart(2, '0')}</h3>
          <p className='demandes-content'>{demande}</p>
        </div>
      ))}
    </section>
  );
};

export default Demandes;
