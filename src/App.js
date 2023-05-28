// import react and components
import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Aboutme from './components/AboutMe';
import Projects from './components/projects';
import ContactMe from './components/contactMe';

// set background color
const styles = {
  body: {
    background: '#219ebc'
  }
}

// create app function 
function App() {
  // create sentences to display in animation
  const texts = [
    ' a full stack developer.',
    ' studying React.',
    ' constantly learning.'
  ];
  // return components to render
  return (
    <div style={styles.body} className="App">
      <Header />
      <Home texts={texts} />
      <Aboutme />
      <Projects />
      <ContactMe /> 
    </div>
  );
}

// export app
export default App;

