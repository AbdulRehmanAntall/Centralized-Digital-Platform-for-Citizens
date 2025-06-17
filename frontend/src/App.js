import React from 'react';
import axios from 'axios';
import Dashboard from './page/Dashboard';
import Signup from './page/Signup';
import Login from './page/Login';
import PasswordReset from './page/PasswordReset';
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

        <Route path="/Signup" element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/PasswordReset' element={<PasswordReset />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
