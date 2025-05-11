import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');

  const handleInput = (value: string) => {
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleBackspace = () => {
  if (display === 'Erro') {
    setDisplay(''); // apaga tudo se estiver com "Erro"
  } else {
    setDisplay(display.slice(0, -1)); // apaga o último caractere
  }
};


  const handleEquals = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Erro');
    }
  };


  return (
    <div className="container">
      <div className="display">{display}</div>
      <div className="keypad">
        <button onClick={handleClear}>C</button>
        <div></div>
        <button></button>
        <button onClick={() => handleInput('+')}>+</button>

        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('-')}>-</button>

        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('*')}>*</button>

        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('/')}>/</button>

        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={handleBackspace}>⌫</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default App;