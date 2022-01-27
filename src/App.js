import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const navLinks = ['About', 'Work', 'Contact' ];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Work':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  }

  return (
    <main className='flex column align-center'>
      <img
      src={require('./assets/fairfax-header.png')}
      className='logo'
      alt='Fairfax Lovelace Portfolio'/>
      <Nav
      navLinks={navLinks}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <footer className='flex justify-center align-center'>
        <a href='https://github.com/flovelace' className='footer-link' target='_blank' rel='noreferrer'>
          Github
        </a>
        < a href='https://www.linkedin.com/in/aflovelace/' className='footer-link' target='_blank' rel='noreferrer'></a>
      </footer>
    </main>
  );
};

export default App;
