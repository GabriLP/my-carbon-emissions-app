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

export interface EmissionData {
  year: number;
  value: number;
}

interface EmissionsChartProps {
  country: string;
  startDate: string;
  endDate: string;
  data: EmissionData[];
}

const EmissionsChart: React.FC<EmissionsChartProps> = ({ data }) => {
  // This component is now purely presentational and only renders the chart based on provided data

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;
