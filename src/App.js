import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  const [currentPage, setPage] = useState('Home')
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home></Home>;
      case 'About':
        return <About></About>;
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact></Contact>;
      default:
        return <Home></Home>
    }
  }
  const changePage = (newPage) => {
    setPage(newPage);
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Nav currentPage={currentPage} changePage={changePage}></Nav>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
