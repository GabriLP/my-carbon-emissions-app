import React, { useState } from 'react';

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
      onDatesChange({
        startDate: (newStartDate),
        endDate: (endDate),
      });
    }
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    if (startDate) {
      onDatesChange({
        startDate: (startDate),
        endDate: (newEndDate),
      });
    }
  };

  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};

export default DateInput;