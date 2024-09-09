import React from 'react';
import ListGroup from './components/ListGroup';
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services';

function App() {
  return (
    <div>
      <ListGroup />
      <About />
      <Contact/>
      <Services/>
    </div>
  );
}

export default App;