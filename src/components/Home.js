// import react, useState, useEffect and useRef
import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';

// Style the name and animation
const styles = {
  position: {
    position: 'relative'
  },
}

const Home = ({ texts }) => {
  // State hook to manage the current text being typed
  const [currentText, setCurrentText] = useState('');
  // State hook to manage the current sentence
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  // State hook to manage typing state
  const [isTyping, setIsTyping] = useState(true);
  // get the current sentence from the texts prop using the current sentence index
  const currentSentence = texts[currentSentenceIndex];
  // Ref hook to keep track of the current index of the character being typed
  const index = useRef(0);

  useEffect(() => {
    // Effect hook to handle typing and deleting animation
    if (isTyping) {
      // If still typing, set a timeout to add the next character to the current text
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + currentSentence.charAt(index.current));
        index.current += 1;
        if (index.current === currentSentence.length) {
          // If reached the end of the sentence, set isTyping to false          
          setIsTyping(false)          
        }
      }, 100);
      return () => {
        // Cleanup function to clear the timeout on unmount or when the effect runs again
        clearTimeout(timeoutId);
      };
    } else {
      // If not typing, set a timeout to delete the last character from the current text
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value.slice(0, -1));
        if (currentText.length === 0) {
          setCurrentSentenceIndex((index) => (index + 1) % texts.length);
          // Set isTyping to true to start typing the next sentence
          setIsTyping(true);
          // Reset the character index to 0
          index.current = 0;
        }
      }, 100);
      return () => {
        // Cleanup function to clear the timeout on unmount or when the effect runs again
        clearTimeout(timeoutId);
      };
    }
    // Run the effect whenever the currentText, currentSentence, isTyping, or texts change
  }, [currentText, currentSentence, isTyping, texts]);

  // Effect hook to reset state when texts prop changes
  useEffect(() => {
    setCurrentText('');
    setCurrentSentenceIndex(0);
    setIsTyping(true);
    index.current = 0;
    // Run the effect whenever the texts prop changes
  }, [texts]);

  return (
    <div  className='z-n1 vh-100 d-flex justify-content-center align-items-center' style={styles.position}>
      <div>
        <div className='d-flex'>
          <h1 id='name' className='z-n1'>Franklyn Suriel</h1>
        </div>
        <div>
          <p id='animation' className='d-flex'>I am {currentText}</p>
        </div>
      </div>
    </div>

  )
};

export default Home;
