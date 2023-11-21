import React, { useState } from 'react';
import { Box, TextField, FormControl } from '@mui/material';
import { motion } from 'framer-motion';

interface DateInputProps {
  onDatesChange: (dates: { startDate: string; endDate: string }) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDatesChange }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    if (endDate) {
      onDatesChange({ startDate: newStartDate, endDate });
    }
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    if (startDate) {
      onDatesChange({ startDate, endDate: newEndDate });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', alignItems: 'center', mt: 2 }}>
        <FormControl variant="outlined" sx={{ flexGrow: 1, maxWidth: 300}}>
          <TextField
            id="start-date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </FormControl>
        <FormControl variant="outlined" sx={{ flexGrow: 1, maxWidth: 300}}>
          <TextField
            id="end-date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            label="End Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </FormControl>
      </Box>
    </motion.div>
  );
};

export default DateInput;