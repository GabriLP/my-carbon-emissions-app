import React, { useState, useEffect } from 'react';

interface DateInputProps {
  onDatesChange: (dates: { startDate: string; endDate: string }) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDatesChange }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Trigger the onDatesChange callback whenever startDate or endDate changes
  useEffect(() => {
    if (startDate && endDate) {
      onDatesChange({ startDate, endDate });
    }
  }, [startDate, endDate, onDatesChange]);

  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateInput;