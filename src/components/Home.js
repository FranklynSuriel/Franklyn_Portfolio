import React, { useState, useEffect, useRef } from 'react';


const styles = {
  position: {
    position: 'relative'
  },
  nameText: {
    fontSize: '4.4rem'
  },
  animationText: {
    fontSize: '2.4rem',
  }
}

const Home = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentSentence = texts[currentSentenceIndex];

  const index = useRef(0);

  useEffect(() => {
    if (isTyping) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + currentSentence.charAt(index.current));
        index.current += 1;
        if (index.current === currentSentence.length) {
          setIsTyping(false);
        }
      }, 100);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value.slice(0, -1));
        if (currentText.length === 0) {
          setCurrentSentenceIndex((index) => (index + 1) % texts.length);
          setIsTyping(true);
          index.current = 0;
        }
      }, 50);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentText, currentSentence, isTyping, texts]);

  useEffect(() => {
    setCurrentText('');
    setCurrentSentenceIndex(0);
    setIsTyping(true);
    index.current = 0;
  }, [texts]);

  return (
    <div id='home'  className='vh-100 d-flex justify-content-center align-items-center' style={styles.position}>
      <div>
        <div className='d-flex'>
          <h1 style={styles.nameText}>Franklyn Suriel</h1>
        </div>
        <div>
          <p className='d-flex' style={styles.animationText}>I am {currentText}</p>
        </div>
      </div>
    </div>

  )
};

export default Home;
