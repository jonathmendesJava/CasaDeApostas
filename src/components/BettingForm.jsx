import React, { useState } from 'react';
console.log('BettingForm component is loaded'); // Log de diagnóstico

const BettingForm = () => {
  const [bet, setBet] = useState({ event: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBet({ ...bet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aposta realizada:', bet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Evento:
          <input type="text" name="event" value={bet.event} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Valor:
          <input type="number" name="amount" value={bet.amount} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Apostar</button>
    </form>
  );
};

export default BettingForm;
