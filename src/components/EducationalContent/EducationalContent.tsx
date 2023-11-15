import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const EducationalContent = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Educational Content
        </Typography>
        <Typography variant="body1" paragraph>
          Learn more about carbon emissions, climate change, and sustainability.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            What Are Carbon Emissions?
          </Typography>
          <Typography variant="body1" paragraph>
            Carbon emissions refer to the release of carbon dioxide (CO2) and other greenhouse gases into the atmosphere. These emissions come from various sources, including the burning of fossil fuels, deforestation, and industrial processes.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Climate Change and Its Effects
          </Typography>
          <Typography variant="body1" paragraph>
            Climate change is a global issue caused by the increase in greenhouse gas emissions. It leads to rising temperatures, sea-level rise, extreme weather events, and impacts on ecosystems and human societies.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Sustainability and Your Role
          </Typography>
          <Typography variant="body1" paragraph>
            Sustainability involves making choices that minimize environmental impact and promote long-term well-being. You can contribute to sustainability by reducing energy consumption, conserving resources, and supporting eco-friendly practices.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default EducationalContent;