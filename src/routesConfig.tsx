import Dashboard from './components/Dashboard/Dashboard';
import EmissionsCoordinate from './components/EmissionsCoordinate/EmissionsCoordinate';
import EducationalContent from './components/EducationalContent/EducationalContent';
import DataFetcher from './components/DataFetcher/DataFetcher';

// Define a type for the props expected by each component's render function
type RenderFunctionProps = {
  handleCountrySelect: (country: string) => void;
  handleCoordinateCheck: (lat: number, lng: number) => void;
  selectedCountry: string;
  emissionsData: any[]; // Specify the correct type for emissions data
};

// Update routesConfig to include render functions for components that need props
const routesConfig: {
  path: string;
  name: string;
  element?: React.ReactNode;
  render?: (props: RenderFunctionProps) => React.ReactNode;
}[] = [
  { path: '/', element: <Dashboard />, name: 'Dashboard' },
  { path: '/dashboard', element: <Dashboard />, name: 'Dashboard' },
  {
    path: '/country',
    render: (props) => <DataFetcher />,
    name: 'CountrySelection',
  },
  {
    path: '/coordinate',
    render: (props) => <EmissionsCoordinate />,
    name: 'CoordinateCheck',
  },
  { path: '/educational', element: <EducationalContent />, name: 'EducationalContent' },
];

export default routesConfig;