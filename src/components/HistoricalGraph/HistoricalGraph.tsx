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

// Define the types for the emissionsData and selectedCountry props
interface HistoricalGraphProps {
  selectedCountry: string;
  emissionsData: number[]; // This assumes emissionsData is an array of numbers
}

const HistoricalGraph: React.FC<HistoricalGraphProps> = ({ selectedCountry, emissionsData }) => {
  // Define the type for the chartData
  interface ChartData {
    name: string;
    Emissions: number;
  }

  // Prepare the data for Recharts
  const chartData: ChartData[] = emissionsData.map((emission, index) => ({
    name: `Month ${index + 1}`,
    Emissions: emission,
  }));

  return (
    <div className="historical-graph-page">
      <h2>Historical Emissions Graph</h2>
      <p>View the emissions data for the last 6 months in a graphical format for {selectedCountry}.</p>

      <div className="graph-container" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} label={{ value: 'Emissions (Megatons)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Emissions"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalGraph;