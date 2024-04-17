import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ text, speed }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setContent((prevContent) => prevContent + text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
    return () => clearInterval(typing);
  }, [text, speed]);

  return <span>{content}</span>;
};

export default TypingAnimation;