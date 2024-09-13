import React from 'react';
import ListGroup from './components/ListGroup';
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <ListGroup />
      <About />
      <Services/>
      <Projects/>
      <Contact/>
     
     
    </div>
  );
}

export default App;