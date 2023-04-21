// import React, { useState, useEffect, useRef } from 'react';

// const TypeWriter = ({text}) => {

//   const index = useRef(0);
//   const [currentText, setCurrentText] = useState('');

//   useEffect(() => {
//     index.current = 0;
//     setCurrentText('')
//   }, [text])
//   useEffect(() => {
//     const timeOutId =  setTimeout(() => {
//       setCurrentText((value) => value + text.charAt(index.current))
//       index.current+= 1
//     }, 1000);
//     return() => {
//       clearTimeout(timeOutId);
//     }
//   }, [currentText, text])

//   return <p>{currentText}</p>
// }

// export default TypeWriter

// import React, { useState, useEffect, useRef } from 'react';

// const TypeWriter = ({ texts }) => {
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [typing, setTyping] = useState(true);

//   const text = texts[currentIndex];

//   useEffect(() => {
//     if (typing) {
//       const timeoutId = setTimeout(() => {
//         setCurrentText((value) => value + text.charAt(index.current));
//         index.current += 1;
//         if (index.current === text.length) {
//           setTyping(false);
//         }
//       }, 100);
//       return () => {
//         clearTimeout(timeoutId);
//       };
//     } else {
//       const timeoutId = setTimeout(() => {
//         setCurrentText((value) => value.slice(0, -1));
//         if (currentText.length === 0) {
//           setCurrentIndex((index) => (index + 1) % texts.length);
//           setTyping(true);
//         }
//       }, 50);
//       return () => {
//         clearTimeout(timeoutId);
//       };
//     }
//   }, [currentText, currentIndex, texts, typing]);

//   const index = useRef(0);

//   useEffect(() => {
//     index.current = 0;
//     setCurrentText('');
//     setCurrentIndex(0);
//     setTyping(true);
//   }, [texts]);

//   return <p>{currentText}</p>;
// };

// export default TypeWriter;

import React, { useState, useEffect, useRef } from 'react';

const AboutMe = ({ texts }) => {
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
    <div id="aboutme">
      <h1>Franklyn Suriel</h1>
      <p>I am {currentText}</p>
      <p>Greetings! I am a full-stack web developer, and my name is [insert your name here]. Since I started
        studying web development, I have been constantly fascinated by the world of web technologies.</p>

      <p>I am proficient in HTML, CSS, and JavaScript, and I have experience in using Bootstrap to create
        responsive, mobile-first designs. I also have experience working with Web APIs and Third-Party APIs
        to develop interactive web applications.</p>
      <p>
        In addition to this, I have expertise in working with NodeJS and Express to create server-side
        applications, as well as SQL and MongoDB for database management. I am well-versed in the MVC
        (Model-View-Controller) architecture and apply it to my projects for improved code structure and
        maintainability.
      </p>
      <p>
        Currently, I am studying React to further expand my skills and knowledge of front-end web
        development. I am passionate about writing clean and efficient code and using the latest
        technologies to deliver high-quality products.
      </p>
      <p>If you are looking for a dedicated and knowledgeable developer who can provide you with customized
        solutions, then I am the right fit for you. I am always eager to learn more and take on new
        challenges, so let's work together and make something great!</p>

    </div>

  )
};

export default AboutMe;
