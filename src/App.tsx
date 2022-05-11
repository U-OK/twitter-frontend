import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { SignIn } from 'pages/SIgnIn/SignIn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
