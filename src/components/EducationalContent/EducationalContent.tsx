import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};


const EducationalContent = () => {
  return (
    <Container maxWidth="md">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ my: 4 }}>
        <motion.div variants={childVariants}>
          <Typography variant="h4" gutterBottom>
            Educational Content
          </Typography>
          <Typography variant="body1" paragraph>
            Learn more about carbon monoxide emissions, climate change, and sustainability.
          </Typography>
        </motion.div>

          {/* Carbon Monoxide Section */}
          <Box sx={{ mt: 3 }}>
          <motion.div variants={childVariants}>
            <Typography variant="h5" gutterBottom>
              Understanding Carbon Monoxide
            </Typography>
            <Typography variant="body1" paragraph>
              Carbon monoxide (CO) is a colorless, odorless gas resulting from the incomplete combustion of carbon-containing fuels. It's a significant pollutant in urban air and contributes to the formation of smog. While not a greenhouse gas itself, it has an indirect effect on climate as it can increase levels of methane and ozone in the atmosphere.
            </Typography>
          </motion.div>
          </Box>

          {/* Methane Section */}
          <Box sx={{ mt: 3 }}>
          <motion.div variants={childVariants}>
            <Typography variant="h5" gutterBottom>
              The Role of Methane in Climate Change
            </Typography>
            <Typography variant="body1" paragraph>
              Methane (CH4) is a potent greenhouse gas, approximately 25 times more effective than CO2 at trapping heat in the atmosphere. Significant sources include agriculture, particularly livestock and rice paddies, as well as leaks from natural gas pipelines.
            </Typography>
          </motion.div>
          </Box>

          {/* Ozone Section */}
          <Box sx={{ mt: 3 }}>
          <motion.div variants={childVariants}>
            <Typography variant="h5" gutterBottom>
              Ozone: A Lesser-Known Contributor
            </Typography>
            <Typography variant="body1" paragraph>
              Ozone (O3) at ground level, or tropospheric ozone, is a key component of smog and a powerful greenhouse gas. It's formed by the reaction of sunlight with pollutants from vehicle exhausts, industrial emissions, and chemical solvents.
            </Typography>
          </motion.div>
          </Box>

          {/* Climate Change and Its Effects Section */}
          <Box sx={{ mt: 3 }}>
          <motion.div variants={childVariants}>
            <Typography variant="h5" gutterBottom>
              Climate Change and Its Effects
            </Typography>
            <Typography variant="body1" paragraph>
              Climate change is a global issue caused by the increase in greenhouse gas emissions. It leads to rising temperatures, sea-level rise, extreme weather events, and impacts on ecosystems and human societies.
            </Typography>
          </motion.div>
          </Box>

          {/* Sustainability and Your Role Section */}
          <Box sx={{ mt: 3 }}>
          <motion.div variants={childVariants}>
            <Typography variant="h5" gutterBottom>
              Sustainability and Your Role
            </Typography>
            <Typography variant="body1" paragraph>
              Sustainability involves making choices that minimize environmental impact and promote long-term well-being. You can contribute to sustainability by reducing energy consumption, conserving resources, and supporting eco-friendly practices.
            </Typography>
          </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default EducationalContent;