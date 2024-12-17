import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import Aboutus from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ContactUsPage from './components/ContactUsPage';
import PlansPage from './components/PlansPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/plans/:serviceId" element={<PlansPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
