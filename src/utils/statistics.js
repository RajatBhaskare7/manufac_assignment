// Calculate mean
export const calculateMean = (data, property) => {
    const total = data.reduce((acc, curr) => acc + parseFloat(curr[property]), 0);
    return (total / data.length).toFixed(3);
  };
  
  // Calculate median
  export const calculateMedian = (data, property) => {
    const sortedData = data.map((item) => parseFloat(item[property])).sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 !== 0) {
      return sortedData[mid].toFixed(3);
    } else {
      return ((sortedData[mid - 1] + sortedData[mid]) / 2).toFixed(3);
    }
  };
  
  // Calculate mode
  export const calculateMode = (data, property) => {
    const counts = {};
    data.forEach((item) => {
      counts[item[property]] = (counts[item[property]] || 0) + 1;
    });
  
    let maxCount = 0;
    let mode;
    for (const key in counts) {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        mode = key;
      }
    }
  
    return parseFloat(mode).toFixed(3);
  };
  
  // Calculate Gamma
  export const calculateGamma = (data) => {
    return data.map(item => ({
      ...item,
      Gamma: parseFloat(((item.Ash * item.Hue) / item.Magnesium).toFixed(3))
    }));
  };
  