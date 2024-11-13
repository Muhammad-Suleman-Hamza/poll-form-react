import './index.css';
import Summary from '../Summary';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import CustomCarousel from '../CustomCarousel';

const questions = [
  { title: "How was your day overall?", options: ["👍", "🤔", "👎"] },
  { title: "How was your week overall?", options: ["👍", "🤔", "👎"] },
  { title: "How was your month overall?", options: ["👍", "🤔", "👎"] },
  { title: "How was your year overall?", options: ["👍", "🤔", "👎"] },
];

const PollForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionSelect = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentStep(0);
  };

  return (
    <Box className={"pollContainer"}>
      <Box className={"pollBox"}>
        {currentStep < questions.length ? (
          <CustomCarousel
            currentStep={currentStep}
            totalSteps={questions.length} 
            onOptionSelect={handleOptionSelect}
            question={questions[currentStep].title}
            options={questions[currentStep].options}

          />
        ) : (
          <Summary answers={answers} questions={questions} onReset={handleReset} />
        )}
      </Box>
    </Box>
  );
};

export default PollForm;
