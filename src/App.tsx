import React from 'react';
import './App.css';
import { ProgressBarCircular } from './components/ProgressBarCircular';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="App" style={{ width: "50%" }}>
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={0} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={10} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={20} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={30} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={40} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={50} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={60} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={70} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={80} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={90} />
        <ProgressBarCircular color1="#5770ff" color2="#c644fd" progress={100} />
      </div>
    </div>
  );
}

export default App;
