import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProgressBarCircular } from './components/ProgressBarCircular';

function App() {
  return (
    <div className="App">
      <ProgressBarCircular colour1="magenta" progress={95} />
    </div>
  );
}

export default App;
