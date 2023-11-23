import React, { memo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme, Paper } from '@mui/material';

interface EmissionData {
  average: number;
  start: string;
  end: string;
}

interface EmissionsChartProps {
  data: EmissionData[];
}

// Helper function to format date with type specified for dateString
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Helper function to format average with type specified for average
const formatAverage = (average: number) => average.toFixed(4);

const EmissionsChart: React.FC<EmissionsChartProps> = React.memo(({ data }) => {
  const theme = useTheme();
  const chartData = data.map((item: EmissionData) => ({
    ...item,
    start: formatDate(item.start),
    average: formatAverage(item.average),
  }));

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, mt: 2 }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
          <XAxis dataKey="start" tick={{ fill: theme.palette.text.primary }} />
          <YAxis tickFormatter={number => `${number}`} tick={{ fill: theme.palette.text.primary }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average" stroke={theme.palette.primary.main} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
});

export default EmissionsChart;