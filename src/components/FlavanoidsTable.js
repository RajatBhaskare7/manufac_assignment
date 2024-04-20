import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import { calculateMean, calculateMedian, calculateMode } from '../utils/statistics';

const FlavanoidsTable = ({ data }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const flavanoidsMean = calculateMean(data, 'Flavanoids');
    const flavanoidsMedian = calculateMedian(data, 'Flavanoids');
    const flavanoidsMode = calculateMode(data, 'Flavanoids');

    setStats({
      mean: flavanoidsMean,
      median: flavanoidsMedian,
      mode: flavanoidsMode,
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
          <td>Flavanoids Mean</td>
          <td>{stats.mean}</td>
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          <td>{stats.median}</td>
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          <td>{stats.mode}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FlavanoidsTable;
