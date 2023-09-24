import React from 'react';

// import components
import Header from './components/Header';
import Sell from './components/Sell';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';
import Home from './components/Home';
import Category from './components/Category';
import Announcement from './components/Announcement';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Home />
      <Category/>
      <Sell />
      <Contact />
      <Announcement/>
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
