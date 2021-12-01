import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
       <Sidebar />
       <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route exact path="/users" element={<UserList />} />
         <Route exact path="/user/:userId" element={<User />} />
         <Route exact path="/newUser" element={<NewUser />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
