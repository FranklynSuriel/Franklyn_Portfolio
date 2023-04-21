// import React from 'react';
// import TypeWriter from './components/Display';

// function App() {
//   return (
//     <div className="App">
//     <h1>TypeWriter</h1>
//     <TypeWriter text={'Hello Hello World'} />
//   </div>
//   ) 
// }

// export default App;

import React from 'react';
import Header from './components/Heather'
import AboutMe from './components/AboutMe';

const styles = {
  body: {
    background: '#e36414'
    

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
      <AboutMe texts={texts} />
    </div>
  );
}

export default App;

