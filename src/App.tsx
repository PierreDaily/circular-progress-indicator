import React from 'react';
import './App.css';
import { ProgressBarCircular } from './components/ProgressBarCircular';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="App" style={{ width: "50%" }}>
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={78} />
      </div>
    </div>
  );
}

export default App;
