import React from 'react';
import axios from 'axios';
import Dashboard from './page/Dashboard';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const fetchData = () => {
    axios.get('http://localhost:5000/')
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };



  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Signup />} />
        <Route path='/Login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
