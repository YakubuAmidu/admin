import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
       <Sidebar />
       <Home />
      </div>
    </div>
  );
}

export default App;
