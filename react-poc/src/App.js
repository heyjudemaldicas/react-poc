// Modules
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/Navbar.js';
import Cart from './pages/Cart.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{
          width: '1280px',
          margin: 'auto',
        }}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
