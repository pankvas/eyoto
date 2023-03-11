import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { Chart, BarElement, BarController, LinearScale, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

const divStyleLeft = {
  position: 'relative',
  top: 10,
  left: 50,
};

const divPrism = {  
  top :50,
  position: 'relative'
}

const parsedtoFixed = (dataValue) => {
  return parseFloat(Number(dataValue)).toFixed(2);      
};  

const Prism =({eye, directionUPDOWN, jobData}) => {

  Chart.register(ChartDataLabels, LinearScale, BarElement, BarController, LinearScale, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);

  // generates a unique id for each Prism Chart
  let chartId = "prismChart";
  let chartCount = 0;
  if (eye=="OD") chartCount+=2;
  if (directionUPDOWN) chartCount+=1;
  chartId += chartCount;

  const prismChart = useRef();

  useEffect(() => {
    prismChart.current.canvas.style.height = '70px';
    prismChart.current.canvas.style.width = '90px'; 
}, [prismChart] );

    const anEye = eye;
    let parsedJSON  = {};
    parsedJSON = JSON.parse(jobData);

    const expectedBarColor = '#0043A7';
    let measuredBarColor ;

    let measurePrismUp = 0, measurePrismIn = 0;
    let expectedPrismUp = 0, expectedPrismIn = 0;
    let resultPrismIndicator = '';

    if (anEye == 'OS' ) //left
    {
        resultPrismIndicator = parsedJSON.data.result.left.prism;

        // OS LEFT MEASURE UP/DOWN
        measurePrismUp = (parsedJSON.data.measure.left.prism.up ? parsedtoFixed(parsedJSON.data.measure.left.prism.up) : 0);
        // OS LEFT MEASURE IN/OUT
        measurePrismIn = (parsedJSON.data.measure.left.prism.in ? parsedtoFixed(parsedJSON.data.measure.left.prism.in) : 0);

        // OS LEFT LMS UP/DOWN
        expectedPrismUp = (parsedJSON.data.lms.left.prism.up ? parsedtoFixed(parsedJSON.data.lms.left.prism.up) : 0);
        // OS LEFT LMS IN/OUT
        expectedPrismIn = (parsedJSON.data.lms.left.prism.in ? parsedtoFixed(parsedJSON.data.lms.left.prism.in) : 0);
    } else {
        resultPrismIndicator = parsedJSON.data.result.right.prism;

        // OS LEFT MEASURE UP/DOWN
        measurePrismUp = (parsedJSON.data.measure.right.prism.up ? parsedtoFixed(parsedJSON.data.measure.right.prism.up) : 0);        
        // OS LEFT MEASURE IN/OUT
        measurePrismIn = (parsedJSON.data.measure.right.prism.in ? parsedtoFixed(parsedJSON.data.measure.right.prism.in) : 0);

        // OS LEFT LMS UP/DOWN
        expectedPrismUp = (parsedJSON.data.lms.right.prism.up ? parsedtoFixed(parsedJSON.data.lms.right.prism.up) : 0);
        // OS LEFT LMS IN/OUT
        expectedPrismIn = (parsedJSON.data.lms.right.prism.in ? parsedtoFixed(parsedJSON.data.lms.right.prism.in) : 0);
    }

    let MeasurementData = [];
    let ExpectedData = [];

    if ( eye='OD' && directionUPDOWN )
    {
      MeasurementData = [measurePrismUp];
      ExpectedData = [expectedPrismUp];
    }
    if ( eye='OD' && !directionUPDOWN )
    {
      MeasurementData = [measurePrismIn];
      ExpectedData = [expectedPrismIn];
    }

    if ( eye='OS' && directionUPDOWN )
    {
      MeasurementData = [measurePrismUp];
      ExpectedData = [expectedPrismUp];
    }
    if ( eye='OS' && !directionUPDOWN )
    {
      MeasurementData = [measurePrismIn];
      ExpectedData = [expectedPrismIn];
    }

    let fail = '#FF0000';
    let pass = '#006600';
    let warning = '#FF8200';

      if ( resultPrismIndicator == 'pass' )
      {
        measuredBarColor = pass;
      }
      else if ( resultPrismIndicator == 'fail' )
      {
        measuredBarColor = fail;
      }
      else if ( resultPrismIndicator == 'warning' )
      {
        measuredBarColor = warning;
      }

  const data = {
    labels:  [MeasurementData, ExpectedData],
    datasets: [{
        maxBarThickness: 10,
        borderWidth: 1,
        data:  [MeasurementData, ExpectedData],
        backgroundColor: [measuredBarColor, expectedBarColor]
      }]
  };

  const options = {
    scales: directionUPDOWN ? { 
      y: {
        ticks: {        
          display: false, // remove all horizontal lines
          beginAtZero: true,
        },          
        grid: {
          lineWidth:4,
          drawBorder: false,
          color: (context) => {
            if (context.tick.value === 0)
            {
              return 'black';
            }
          }
        },
      }
    } : {      
      x: {
        grid: {          
          drawBorder: false,
          display: false 
        },
        ticks: {
          display: false, // remove all horizontal lines
          beginAtZero: true,
        },          
        grid: {
          lineWidth:4,
          drawBorder: false,
          color: (context) => {
            if (context.tick.value === 0)
            {
              return 'black';
            }
          }
        },
      }
    },   
        
    indexAxis: directionUPDOWN ? null :'y',
    responsive: false,   
    plugins: {
      datalabels: {
        color: '#000000',
        display: true,
        align: directionUPDOWN ? 'left' :'top',
        offset: directionUPDOWN ? -50 : -10,
        padding: 10,
        font: {
          size: "25",
          weight: "bold"
        }
      },
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },      
    },
  };

  return(
    <>
       <div style={divStyleLeft}>
          <Bar style={divPrism} id={chartId} ref={prismChart} options={options} data={data} />
       </div>
    </>
  )
}

export default Prism;