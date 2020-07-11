
  var dayConfig = {
    type: "line",
    data: {
      labels: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],
      datasets: [     
        {
          label: "Temperatura mínima",
          fill: false,
          backgroundColor: window.chartColors.blue,
          borderColor: window.chartColors.blue,
          data: [
            15.0,
            12.6,
            17.0,
            11.0,
            16.0,          
            15.0,          
            
          ],
        },
        {
          label: "Temperatura máxima",
          fill: false,
          backgroundColor: window.chartColors.red,
          borderColor: window.chartColors.red,
          data: [
            25.0,
            30.6,
            33.0,
            37.0,
            31.0,          
            32.0,          
                   
          ],
        },
        {
          label: "Temperatura promeido",
          fill: false,
          backgroundColor: window.chartColors.yellow,
          borderColor: window.chartColors.yellow,
          data: [
            22.0,
            24.6,
            22.0,
            33.0,
            29.0,          
            29.0,          
            
          ],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Hoy",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Week",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
    },
  };    
  