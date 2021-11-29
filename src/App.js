import React from 'react';
import './App.css';
import Topbar from "./components/Topbar";
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
       <Sidebar />
       <div className="others">Others</div>
      </div>
    </div>
  );
}

export default App;
