// import react and components
import React from "react";
import Header from "./components/Header";
// import Home from "./components/Home";
import Aboutme from "./components/AboutMe";
// import Projects from "./components/projects";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/contactMe";
const styles = {
  background: {
      background: '#006ba6'
  }
}

// create app function
function App() {

  // create sentences to display in animation
  const texts = [
    " a full stack developer.",
    " constantly learning.",
    " studying NextJS.",
    " a team player.",
  ];
  // <Home texts={texts} />
  // return components to render
  return (
    <div className="App" style={styles.background}>
      <Header />
      <Aboutme />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

// export app
export default App;
