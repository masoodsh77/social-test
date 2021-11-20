import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App-header">
      <Navbar/>
      <div className="App-body">
        <Main/>
      </div>
    </div>
  );
}

export default App;
