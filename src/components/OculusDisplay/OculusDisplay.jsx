import React from 'react';
import { Chart, BarElement, BarController,LinearScale, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './OculusDisplay.css';

const divStyleLeft = {
  position: 'relative',
  top : 20,
  left : 10,
  fontSize: 10,
  fontWeight :'100',
  textAlign:"left",
  width: '100px'
};

const divStyleRight = {
  top: 1,
  width: '100px',
  left: 227,
  fontSize: 10,
  fontWeight: 100,
  position: 'relative'
};

const divdisplay = {
  top :22,
  position: 'relative'
};

const parsedtoFixed = (dataValue) => {
  return parseFloat(Number(dataValue)).toFixed(2);      
};

const OculusDisplay =({eye, jobData}) => {
  
  const anEye = eye;

  Chart.register(ChartDataLabels, LinearScale, BarElement, BarController, LinearScale, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);

  let parsedJSON  = {};
  parsedJSON = JSON.parse(jobData);

  let measureLeftSph = 0, measureLeftCyl = 0, measureLeftAdd = 0, measureLeftAx = 0; 
  let resultLeftSph ='', resultLeftCyl ='', resultLeftAdd ='', resultLeftAx ='';

  let measureRightSph = 0, measureRightCyl = 0, measureRightAdd = 0, measureRightAx = 0;
  let resultRightSph ='', resultRightCyl ='', resultRightAdd ='', resultRightAx ='';
  
  if (anEye == 'OS' ) //left
  {
    measureLeftSph = (parsedJSON.data.measure.left.sph ? parsedtoFixed(parsedJSON.data.measure.left.sph) : 0);    
    measureLeftCyl = (parsedJSON.data.measure.left.cyl ? parsedtoFixed(parsedJSON.data.measure.left.cyl) : 0);
    measureLeftAx = (parsedJSON.data.measure.left.ax ? parsedtoFixed(parsedJSON.data.measure.left.ax) : 0);
    measureLeftAdd = (parsedJSON.data.measure.left.add ? parsedtoFixed(parsedJSON.data.measure.left.add) : 0);
    
    resultLeftSph = (parsedJSON.data.result.left.sph? parsedJSON.data.result.left.sph : 0 );
    resultLeftCyl = (parsedJSON.data.result.left.cyl? parsedJSON.data.result.left.cyl : 0 );
    resultLeftAx = (parsedJSON.data.result.left.ax? parsedJSON.data.result.left.ax : 0 );
    resultLeftAdd = (parsedJSON.data.result.left.add? parsedJSON.data.result.left.add : 0 );
  }else
  {
    measureRightSph = (parsedJSON.data.measure.right.sph ? parsedtoFixed(parsedJSON.data.measure.right.sph) : 0);
    measureRightCyl = (parsedJSON.data.measure.right.cyl ? parsedtoFixed(parsedJSON.data.measure.right.cyl) : 0);
    measureRightAx = (parsedJSON.data.measure.right.ax ? parsedtoFixed(parsedJSON.data.measure.right.ax) : 0);
    measureRightAdd = (parsedJSON.data.measure.right.add ? parsedtoFixed(parsedJSON.data.measure.right.add) : 0);    

    console.log('measureRightSph :  ' + measureRightSph );
    console.log('measureRightCyl :  ' + measureRightCyl );
    console.log('measureRightAx :  ' + measureRightAx );
    console.log('measureRightAdd :  ' + measureRightAdd );
    
    resultRightSph = (parsedJSON.data.result.right.sph ? parsedJSON.data.result.right.sph : 0);
    resultRightCyl = (parsedJSON.data.result.right.cyl ? parsedJSON.data.result.right.cyl : 0);
    resultRightAx = (parsedJSON.data.result.right.ax ? parsedJSON.data.result.right.ax : 0);
    resultRightAdd = (parsedJSON.data.result.right.add ? parsedJSON.data.result.right.add : 0);
    console.log('resultRightSph :  ' + resultRightSph );
console.log('resultRightCyl :  ' + resultRightCyl );
console.log('resultRightAx :  ' + resultRightAx );
console.log('resultRightAdd :  ' + resultRightAdd );
  }




  const OSData = [measureLeftSph, measureLeftCyl, measureLeftAx, measureLeftAdd];
  const ODData = [measureRightSph, measureRightCyl, measureRightAx, measureRightAdd];

  let barColorsLeft = [];
  let barColorsRight = [];

  const SetBarColors = ( resultValue, i, anEye) => {

        let fail = '#FF0000';
        let pass = '#006600';
        let warning = '#FF8200';
        
        if(resultValue == 'pass' )
        {
          if ( anEye == 'OD' )
          {            
            barColorsRight[i]=pass;  
          }
          else
          {
            barColorsLeft[i]=pass;  
          }   
        }
        else if(resultValue == 'fail')
        {
          // red
          if ( anEye == 'OD' )
          {
            barColorsRight[i]=fail;  
          }
          else
          {
            barColorsLeft[i]=fail;  
          }         
        }
        else if(resultValue == 'warning')
        {   
          //amber       
          if ( anEye == 'OD' )
          {
            barColorsRight[i]=warning;  
          }
          else
          {
            barColorsLeft[i]=warning;  
          }      
        } 
  };

  if ( anEye == 'OS'){    
    SetBarColors( resultLeftSph, 0, anEye);
    SetBarColors( resultLeftCyl, 1, anEye);
    SetBarColors( resultLeftAx, 2, anEye);
    SetBarColors( resultLeftAdd, 3, anEye);
  }else{
    SetBarColors( resultRightSph, 0, anEye);
    SetBarColors( resultRightCyl, 1, anEye);
    SetBarColors( resultRightAx, 2, anEye);
    SetBarColors( resultRightAdd, 3, anEye);
  }

  const options = {
    scales: {
      x: {
        grid: {
          lineWidth:10,
          drawBorder: false,
          display: false 
        },
        ticks: {
          display: false,
          beginAtZero: true,
        },
         grid: {
          color: (context) =>{
            if (context.tick.value === 0){
              return 'black';
            }
          },
        },
      },
      y: {
        ticks: {
            display: false,
          },
          beginAtZero: true,
          grid: {           
            drawBorder: false,  
            display: false,            
          },
        }
    },
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      datalabels: {
        color: '#000000',
        display: true, 
        align: 'right',
        offset: 0,
        anchor: "start",
        padding: 10,
        font: {
          size: "10",
          weight: "bold"
        }
      },
      legend: {
        display: false
      },
      tooltip: {
        enabled: false 
      }
    },
  };
  
   const data = {
    labels: anEye == 'OS' ? OSData : ODData,
    datasets: [
      {
        data: anEye == 'OS' ? OSData : ODData,
        backgroundColor: anEye == 'OS' ? barColorsLeft : barColorsRight,
      },
    ],
  };

  return(
    <>
       <div>
            <Bar style={divdisplay} options={options} data={data} />
       </div>
    </>
  )
}

export default OculusDisplay;