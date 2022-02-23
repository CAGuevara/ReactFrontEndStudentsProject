import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Students from './pages/Students';

import './App.css';

import React from 'react';

const App = () => {
  return (
    <div>
      {/* Hello, Crazy World */}
      <Nav/>
      <Routes>
        <Route path='students' element={<Students />}/>
      </Routes>
    </div>
  );
}

export default App;
