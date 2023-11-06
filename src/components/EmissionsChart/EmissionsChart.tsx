import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

interface EmissionsChartProps {
  country: string;
}

interface EmissionData {
  year: number;
  value: number;
}

const EmissionsChart: React.FC<EmissionsChartProps> = ({ country }) => {
  const [data, setData] = useState<EmissionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.v2.emissions-api.org/api/v2/co2/country/${country}?last=6months`);
        setData(response.data.data);
      } catch (error) {
        setError('Failed to fetch data. Please try again.');
      }
      setLoading(false);
    };

    fetchData();
  }, [country]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a Loader component
  }

  if (error) {
    return <div>Error: {error}</div>; // You can replace this with an ErrorMessage component
  }

  return (
    <ResponsiveContainer width="80%" height="80%">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;