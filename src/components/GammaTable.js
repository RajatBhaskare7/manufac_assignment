import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import { calculateMean, calculateMedian, calculateMode, calculateGamma } from '../utils/statistics';

const GammaTable = ({ data }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const gammaData = calculateGamma(data);
    const gammaMean = calculateMean(gammaData, 'Gamma');
    const gammaMedian = calculateMedian(gammaData, 'Gamma');
    const gammaMode = calculateMode(gammaData, 'Gamma');

    setStats({
      mean: gammaMean,
      median: gammaMedian,
      mode: gammaMode,
    });
  }, [data]);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Measure</th>
          <th>Class 1</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma Mean</td>
          <td>{stats.mean}</td>
        </tr>
        <tr>
          <td>Gamma Median</td>
          <td>{stats.median}</td>
        </tr>
        <tr>
          <td>Gamma Mode</td>
          <td>{stats.mode}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GammaTable;
