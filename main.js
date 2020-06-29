window.onload = function () {
    var weekctx = document.getElementById("week").getContext("2d");
    let weekChart = new Chart(weekctx, weekConfig);
    var dayctx = document.getElementById("day").getContext("2d");
    let dayChart = new Chart(dayctx, dayConfig);
  };
  
  