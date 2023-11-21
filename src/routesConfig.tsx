import EmissionsCoordinate from './components/EmissionsCoordinate/EmissionsCoordinate';
import EducationalContent from './components/EducationalContent/EducationalContent';
import DataFetcher from './components/DataFetcher/DataFetcher';

const routesConfig = [
  { path: '/', element: <DataFetcher />, name: 'CountrySelection' },
  { path: '/coordinate', element: <EmissionsCoordinate />, name: 'CoordinateCheck' },
  { path: '/educational', element: <EducationalContent />, name: 'EducationalContent' },
];

export default routesConfig;