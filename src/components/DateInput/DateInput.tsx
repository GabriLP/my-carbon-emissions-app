import React, { useState } from 'react';
import { Box, TextField, FormControl } from '@mui/material';

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
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', marginTop: 2 }}>
      <FormControl variant="outlined">
        <TextField
          id="start-date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          label="Start Date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          id="end-date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          label="End Date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </Box>
  );
};

export default DateInput;