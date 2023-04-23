import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Aboutme from './components/Aboutme';

const styles = {
  body: {
    background: '#219ebc'
  }
}

function App() {
  const texts = [
    'a full stack developer.',
    'studying React.',
    // 'I love to code',
    'constantly learning.',
    'always looking for new challenges.',
  ];

  return (
    
    
    <div style={styles.body} className="App">
      <Header />      
      <Home texts={texts} />
      <Aboutme />
    </div>
  );
}

export default App;

