import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import FlavanoidsTable from './components/FlavanoidsTable';
import GammaTable from './components/GammaTable';
import rawData from './assets/Wine-Data.json';


function App() {
  return (
    <MantineProvider>
      <div className="App">
        <h1>Wine Data Analysis</h1>
        
        <h2>Flavanoids Statistics</h2>
        <FlavanoidsTable data={rawData} />

        <h2>Gamma Statistics</h2>
        <GammaTable data={rawData} />
      </div>
    </MantineProvider>
  );
}

export default App;
