import './index.css';
import React from 'react';
import { Typography, Stack, IconButton } from '@mui/material';

const CustomCarousel = ({ question, options, onOptionSelect, currentStep, totalSteps }) => {
  return (
    <div className={"carouselContainer"}>
      {/* Left side with the question and vertical dots */}
      <div className={"leftPane"}>
        <Typography variant="h4" className={"questionText"}>
          {question}
        </Typography>
        <Stack direction="column" spacing={1} className={"navigationDots"}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentStep ? "activeDot" : ''}`}
            />
          ))}
        </Stack>
      </div>

      {/* Right side with the options */}
      <div className={"rightPane"}>
        <Stack direction="row" spacing={3}>
          {options.map((option, index) => (
            <IconButton
              key={index}
              className={"optionButton"}
              onClick={() => onOptionSelect(option)}
              title = {
                option === "👍" ? "Thumbs Up" :
                option === "🤔" ? "Thinking" :
                option === "👎" ? "Thumbs Down" : ''
              }
            >
              {option}
            </IconButton>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default CustomCarousel;
