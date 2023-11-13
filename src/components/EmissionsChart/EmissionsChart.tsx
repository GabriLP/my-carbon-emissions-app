import React from 'react';
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
const formatAverage = (average: number) => average.toFixed(5);

const EmissionsChart: React.FC<EmissionsChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    ...item,
    start: formatDate(item.start),
    average: formatAverage(item.average),
  }));

  return (
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="start" tick={{ fill: 'gray' }} />
        <YAxis tickFormatter={number => `${number} ppm`} tick={{ fill: 'gray' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;