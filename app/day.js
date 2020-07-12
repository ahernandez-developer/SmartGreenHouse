
  var dayConfig = {
    type: "line",
    data: {
      labels: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],
      datasets: [             
        {
          label: "Temperatura",
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
              labelString: "Dailiy",
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
  