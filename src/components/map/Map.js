import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

import LinearGradient from './LinearGradient.js';
import './styles.css';

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
  };

  const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];
  const COLOR_RANGE1 = [
    '#F0F8FF',
    '#89CFF0',
    '#B2FFFF',
    '#7CB9E8',
    '#00FFFF',
    '#007FFF',
    '#0000FF',
    '#0039a6',
    '#13274F'
  ];

  const DEFAULT_COLOR = '#0039a6';

// const getRandomInt = () => {
//   return parseInt(Math.random() * 100);
// };

const geographyStyle = {
    default: {
      outline: 'none'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };

  // const getHeatMapData = () => {
  //   return [
  //     { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt() },
  //     { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() },
  //     { id: 'AS', state: 'Assam', value: getRandomInt() },
  //     { id: 'BR', state: 'Bihar', value: getRandomInt() },
  //     { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() },
  //     { id: 'GA', state: 'Goa', value: 21 },
  //     { id: 'GJ', state: 'Gujarat', value: 22 },
  //     { id: 'HR', state: 'Haryana', value: getRandomInt() },
  //     { id: 'HP', state: 'Himachal Pradesh', value: 24 },
  //     { id: 'JH', state: 'Jharkhand', value: 26 },
  //     { id: 'KA', state: 'Karnataka', value: 279 },
  //     { id: 'KL', state: 'Kerala', value: getRandomInt() },
  //     { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() },
  //     { id: 'MH', state: 'Maharashtra', value: getRandomInt() },
  //     { id: 'MN', state: 'Manipur', value: getRandomInt() },
  //     { id: 'ML', state: 'Meghalaya', value: 59 },
  //     { id: 'MZ', state: 'Mizoram', value: getRandomInt() },
  //     { id: 'NL', state: 'Nagaland', value: 59 },
  //     { id: 'OR', state: 'Odisha', value: 59 },
  //     { id: 'PB', state: 'Punjab', value: getRandomInt() },
  //     { id: 'RJ', state: 'Rajasthan', value: getRandomInt() },
  //     { id: 'SK', state: 'Sikkim', value: getRandomInt() },
  //     { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() },
  //     { id: 'TG', state: 'Telangana', value: 45 },
  //     { id: 'TR', state: 'Tripura', value: 14 },
  //     { id: 'UT', state: 'Uttarakhand', value: getRandomInt() },
  //     { id: 'UP', state: 'Uttar Pradesh', value: 15 },
  //     { id: 'WB', state: 'West Bengal', value: 17 },
  //     { id: 'WB', state: 'West Bengal', value: 17 },
  //     { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() },
  //     { id: 'CH', state: 'Chandigarh', value: getRandomInt() },
  //     { id: 'DN', state: 'Dadra and Nagar Haveli', value: 19 },
  //     { id: 'DD', state: 'Daman and Diu', value: 20 },
  //     { id: 'DL', state: 'Delhi', value: 59 },
  //     { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
  //     { id: 'LA', state: 'Ladakh', value: getRandomInt() },
  //     { id: 'LD', state: 'Lakshadweep', value: getRandomInt() },
  //     { id: 'PY', state: 'Puducherry', value: getRandomInt() }
  //   ];
  // };

  
  function Map({details}) {
    const arr = []
    details.map((value, index) => {
        arr.push(value.confirmed);
    });
    const getHeatMapData = [
        { id: 'AP', state: 'Andhra Pradesh', value: arr[2]},
        { id: 'AR', state: 'Arunachal Pradesh', value: arr[26] },
        { id: 'AS', state: 'Assam', value: arr[12] },
        { id: 'BR', state: 'Bihar', value: arr[10] },
        { id: 'CT', state: 'Chhattisgarh', value: arr[13] },
        { id: 'GA', state: 'Goa', value: arr[21] },
        { id: 'GJ', state: 'Gujarat', value: arr[15] },
        { id: 'HR', state: 'Haryana', value: arr[14] },
        { id: 'HP', state: 'Himachal Pradesh', value: arr[24]},
        { id: 'JH', state: 'Jharkhand', value: arr[18] },
        { id: 'KA', state: 'Karnataka', value: arr[1] },
        { id: 'KL', state: 'Kerala', value: arr[4]  },
        { id: 'MP', state: 'Madhya Pradesh', value: arr[16] },
        { id: 'MH', state: 'Maharashtra', value: arr[0] },
        { id: 'MN', state: 'Manipur', value: arr[25] },
        { id: 'ML', state: 'Meghalaya', value: arr[28] },
        { id: 'MZ', state: 'Mizoram', value: arr[33]},
        { id: 'NL', state: 'Nagaland', value: arr[29] },
        { id: 'OR', state: 'Odisha', value: arr[8] },
        { id: 'PB', state: 'Punjab', value: arr[17] },
        { id: 'RJ', state: 'Rajasthan', value: arr[11] },
        { id: 'SK', state: 'Sikkim', value: arr[32] },
        { id: 'TN', state: 'Tamil Nadu', value: arr[3] },
        { id: 'TG', state: 'Telangana', value:arr[9]  },
        { id: 'TG', state: 'Telangana', value:arr[9]  },
        { id: 'TR', state: 'Tripura', value: arr[23] },
        { id: 'UT', state: 'Uttarakhand', value: arr[20] },
        { id: 'UP', state: 'Uttar Pradesh', value: arr[5]  },
        { id: 'WB', state: 'West Bengal', value: arr[7]  },
        { id: 'WB', state: 'West Bengal', value: arr[7]  },
        { id: 'AN', state: 'Andaman and Nicobar Islands', value: arr[31] },
        { id: 'CH', state: 'Chandigarh', value: arr[27] },
        { id: 'DN', state: 'Dadra and Nagar Haveli', value: arr[35] },
        { id: 'DD', state: 'Daman and Diu', value: arr[34]},
        { id: 'DL', state: 'Delhi', value: arr[6]  },
        { id: 'JK', state: 'Jammu and Kashmir', value:arr[19] },
        { id: 'LA', state: 'Ladakh', value: arr[30] },
        { id: 'LD', state: 'Lakshadweep', value: arr[36] },
        { id: 'PY', state: 'Puducherry', value: arr[22] }
      ];
     console.log("LOBO",arr[1]);
     console.log(arr);
    const [tooltipContent, setTooltipContent] = useState('');
    const [data, setData] = useState(getHeatMapData);

    const gradientData = {
    fromColor: COLOR_RANGE1[0],
    toColor: COLOR_RANGE1[COLOR_RANGE1.length - 1],
    min: 100000,
    //max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
    //max: arr.reduce((max, item) => (item.value > max ? item.value : max), 0)
    max: Math.max(...arr)
  };
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.value))
    .range(COLOR_RANGE1);

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  

  return (
    <div className="full-width-height container">
      <h1 className="no-margin center">COVID 19 Heatmap</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={400}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                //console.log(geo.id);
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <LinearGradient data={gradientData} />
        {/* <div className="center">
          <button className="mt16" onClick={onChangeButtonClick}>Change</button>
        </div> */}
    </div>
  );
  }

  export default Map;