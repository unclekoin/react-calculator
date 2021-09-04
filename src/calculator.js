import React from 'react';
import './App.css';

function App() {
  return (
    <div class="calculator">
      <div class="calculator__display-wrapper">
        <div class="calculator__display">55555</div>
      </div>
      <div class="calculator__buttons">
        <div class="calculator__button">+</div>
        <div class="calculator__button">-</div>
        <div class="calculator__button">*</div>
        <div class="calculator__button">/</div>
        <div class="calculator__button">7</div>
        <div class="calculator__button">8</div>
        <div class="calculator__button">9</div>
        <div class="calculator__button">4</div>
        <div class="calculator__button">5</div>
        <div class="calculator__button">6</div>
        <div class="calculator__button">1</div>
        <div class="calculator__button">2</div>
        <div class="calculator__button">3</div>
        <div class="calculator__button">0</div>
        <div class="calculator__button">.</div>
        <div class="calculator__button">AC</div>
        <div class="calculator__button calculator__button--big">=</div>
      </div>
    </div>
  );
}

export default App;
