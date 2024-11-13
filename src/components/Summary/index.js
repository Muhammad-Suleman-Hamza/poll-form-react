import './index.css';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Box, Stack, Button, Typography } from '@mui/material';

const Summary = ({ onReset, answers, questions }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data submitted successfully:', result);
        toast.success("Data submitted successfully, moving to first slide");
        setTimeout(() => onReset(), 1000);
      } else {
        toast.error("Failed to submit data");
        console.error('Failed to submit data');
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error submitting data");
      console.error('Error submitting data:', error);
    }
  };

  const handleReset = () => {
    toast.warning("Moving to first slide");
    setTimeout(() => onReset(), 1000);
  }

  return (
    <Stack spacing={3} alignItems="center" className="summary-container">
      <Typography variant="h5">Your Responses:</Typography>
      <Box className={"summaryContainer"}>
        {answers.map((answer, index) => (
          <Typography key={index} variant="body1">
            {questions[index]?.title}: {answer}
          </Typography>
        ))}
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Restart
        </Button>
      </Box>
      <Box>

        <Button variant="contained" color="primary" onClick={handleSubmit} className={"submitButton"}>
          {
            loading ?
              <div class="loader"></div>
              : "Submit Data to Backend"
          }
        </Button>
      </Box>
    </Stack>
  );
};

export default Summary;
