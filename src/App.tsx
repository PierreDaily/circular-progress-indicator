import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProgressBarCircular } from './components/ProgressBarCircular';

function App() {
  return (
    <div className="App">
      <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={78} />
    </div>
  );
}

export default App;
