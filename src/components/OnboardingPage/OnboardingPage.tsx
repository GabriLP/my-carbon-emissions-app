import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';

type OnboardingPageProps = {
  onComplete: () => void;
};

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Global Emissions Tracker
        </Typography>
        <Typography variant="body1" paragraph>
          Explore and analyze data on carbon monoxide, ozone, and methane emissions globally, either by country or specific coordinates.
        </Typography>
        <Button variant="contained" color="primary" onClick={onComplete}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default OnboardingPage;