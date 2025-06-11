import React from 'react';
import axios from 'axios';

function App() {
  const fetchData = () => {
    axios.get('http://localhost:5000/')
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>React + NodeJS + MySQL Fullstack Project</h1>
      <button onClick={fetchData}>Fetch Backend Data</button>
    </div>
  );
}

export default App;
