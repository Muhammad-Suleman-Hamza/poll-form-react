import './index.css';
import React from 'react';
import { Typography, Stack, IconButton } from '@mui/material';

const PollStep = ({ question, onOptionSelect }) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">{question?.title}</Typography>
      <Stack direction="row" spacing={3}>
        {question?.options?.map((option, index) => (
          <IconButton key={index} onClick={() => onOptionSelect(option)}>
            <Typography variant="h3">{option}</Typography>
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
};

export default PollStep;
