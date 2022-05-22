import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Signup from './components/signup';
import Thankyou from './components/thankyou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/thankyou' element={<Thankyou />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
