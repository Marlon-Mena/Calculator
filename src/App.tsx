import React, { useState } from 'react';
import './App.css';

  //para que o display sempre iniciar com "0"
const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');

  //função para quando clicar em algum valor, ele mostrar na tela
  const handleInput = (value: string) => {
    setDisplay((atualNumber) => {
      if (prev == '0') {
        return value;
      } else {
        return atualNumber + value;
      }
    });
  };

  //quando o display apagar ele começa com "0"
  const handleClear = () => {
    setDisplay('0');
  };

  //apaga o último caractere, além de um "if" para que toda vez que aparecer "erro" ele apaga tudp
  const handleBackspace = () => {
  if (display === 'Erro') {
    setDisplay(''); 
  } else {
    setDisplay(display.slice(0, -1));
  }
};


  const handleEquals = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Erro');
    }
  };

  //adicionando todos os botão da calculadora
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
