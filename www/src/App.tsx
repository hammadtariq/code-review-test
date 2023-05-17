import React from 'react';
import logo from './logo.svg';
import './App.css';

var numberResult: any;

function doApi() {
  var numbers = (document.getElementById("numbers") as HTMLInputElement).value;
  fetch('http://localhost:3001/?numbers=' + numbers).then((v) => {
    v.json().then(v2 => {
      numberResult = v2;
    })
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <input id="numbers" />
       <button onClick={doApi}>Submit</button>
       <span>You forgot {numberResult}</span>
      </header>
    </div>
  );
}

export default App;
