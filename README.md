# GlobalEmissions

## Overview
GlobalEmissions is a React web application that provides users with the ability to analyze global emissions data based on country selection, geographical coordinates, and specific pollutants. The application utilizes Redux for state management and Material UI for styling. This project is ideal for those interested in environmental data analysis and climate change studies.

## Features
- **Country and Coordinate-Based Data Analysis:** Users can select countries or enter geographical coordinates to fetch emissions data.
- **Pollutant Selection:** Supports analysis of various pollutants like Carbon Monoxide, Methane, and Ozone.
- **Interactive Map:** Clickable map for selecting geographical coordinates.
- **Data Visualization:** Emissions data is visualized using responsive line charts.
- **Educational Content:** Provides insights into different pollutants and their impact on climate change.

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/GabriLP/carbon-emissions-app.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm start
   ```

## Technologies Used
- React.js
- Redux Toolkit
- Material UI
- Framer Motion for animations
- Axios for API requests
- Recharts for data visualization
- Leaflet for interactive mapping

## Directory Structure
- `src/app`: Contains Redux store and root reducer.
- `src/components`: Reusable React components like headers, charts, and form controls.
- `src/features`: Redux slices and asynchronous actions for different features like countries and emissions.
- `pages`: Next.js pages for different application routes.
- `public`: Static assets like images.
- `style`: Global styles and Material UI theme customization.

## Contribution
Contributions to the GlobalEmissions project are welcome. Please follow the existing coding style and submit a pull request for review.
