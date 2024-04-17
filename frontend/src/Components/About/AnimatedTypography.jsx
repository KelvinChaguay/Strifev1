import React from 'react';
import { Typography } from '@mui/material';

const AnimatedTypography = ({ text, ...props }) => {
  return (
    <Typography {...props}>
      {text.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s`, background: 'linear-gradient(90.36deg, rgb(48, 181, 255) 29.42%, rgb(78, 102, 250) 50.67%, rgb(141, 82, 248) 73.23%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="letter">
          {letter}
        </span>
      ))}
    </Typography>
  );
};

export default AnimatedTypography;
