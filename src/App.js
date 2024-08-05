import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/search' element={<SearchInput />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
