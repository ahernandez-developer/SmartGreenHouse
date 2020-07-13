const app = new Vue({
  el: "#app",
  created() {
    //?past miliseconds for periodic fetch;
    this.fetchCurrentTemp(20000);
    this.fetchHistory();
  },
  data: {
    currentTempInside: "",
    currentTempOutside: "",
    dailyInsideTempChart: null,
    dailyOutsideTempChart: null,
    history: [],
  },
  methods: {
    fetchCurrentTemp(interval) {
      this.fetchCurrent();
      interval != null
        ? setInterval(()=>this.fetchCurrent(), interval)
        : null;
    },
    fetchHistory() {
      axios
        .get("https://api.deldesierto.org/climate/temperatureData", {
          headers: {
            Authorization: "59f02390-a2a3-4dc1-b19d-3c37d8933fa0",
          },
          params: { startDate: "2020-07-01", endDate: "2021-01-01" },
        })
        .then((response) => {
          let temps = response.data.payload;

          this.history = temps.reverse();
          console.log(this.history[0]);
          let dailyData = this.getDailyResults(this.history);
          let dailyInsideTemByHour = this.groupInsideTempByHour(dailyData);
          let dailyOutsideTemByHour = this.groupOutsideTempByHour(dailyData);

          this.updateDailyCharts(dailyInsideTemByHour, dailyOutsideTemByHour);

          $(document).ready(function () {
            $("#history").DataTable({
              responsive: true,
              aaSorting: [],
            });
          });
        });
    },
    fetchCurrent() {
      axios
        .get("https://api.deldesierto.org/climate/lastEntry", {
          headers: {
            Authorization: "59f02390-a2a3-4dc1-b19d-3c37d8933fa0",
          },
        })
        .then((response) => {
          this.currentTempInside = response.data.payload[0].insideTemp;
          this.currentTempOutside = response.data.payload[0].outsideTemp;
        });
    },
    InitializeChartsCanvas() {
      window.onload = function () {
        new Chart(document.querySelector("#week").getContext("2d"), weekConfig);
      };
    },
    getDailyResults(history) {
      let daily = history.filter((temp) =>
        temp.created.includes(this.todayDate())
      );
      return daily;
    },
    groupInsideTempByHour(data) {
      let results = data.reduce(function (r, a) {
        let currentHour = a.created.split("T")[1].split(":")[0];
        r[currentHour] = r[currentHour] || [];
        r[currentHour].push(a);
        return r;
      }, Object.create(null));

      //average of any hour
      for (const hour in results)
        results[hour] = (
          results[hour].reduce((prev, next) => prev + next.insideTemp, 0) /
          results[hour].length
        ).toFixed(2);

      return results;
    },
    groupOutsideTempByHour(data) {
      let results = data.reduce(function (r, a) {
        let currentHour = a.created.split("T")[1].split(":")[0];
        r[currentHour] = r[currentHour] || [];
        r[currentHour].push(a);
        return r;
      }, Object.create(null));

      //average of any hour
      for (const hour in results)
        results[hour] = (
          results[hour].reduce((prev, next) => prev + next.outsideTemp, 0) /
          results[hour].length
        ).toFixed(2);

      return results;
    },
    updateDailyCharts(insideTemp, outsideTemp) {
      let sortedInsideTemp = [];
      let sortedOutsideTemp = [];
      let sortedhours = [];
      Object.keys(insideTemp)
        .sort()
        .forEach(function (key) {
          sortedhours.push(key);
          sortedInsideTemp.push(insideTemp[key]);
          sortedOutsideTemp.push(outsideTemp[key]);
        });
      //!Inside temp
      let dailyInsideTempChartConfigs = JSON.parse(JSON.stringify(dayConfig));
      dailyInsideTempChartConfigs.data.labels = sortedhours;

      dailyInsideTempChartConfigs.data.datasets[0].backgroundColor =
        window.chartColors.green;
      dailyInsideTempChartConfigs.data.datasets[0].borderColor =
        window.chartColors.green;

      dailyInsideTempChartConfigs.data.datasets[0].data = sortedInsideTemp;
      dailyInsideTempChartConfigs.options.title.text = "Inside";
      this.dailyInsideTempChart = new Chart(
        document.querySelector("#inside").getContext("2d"),
        dailyInsideTempChartConfigs
      );

      //!Outisde temp
      let dailyOutsideTempChartConfigs = JSON.parse(JSON.stringify(dayConfig));
      dailyOutsideTempChartConfigs.data.labels = sortedhours;

      dailyOutsideTempChartConfigs.data.datasets[0].backgroundColor =
        window.chartColors.yellow;
      dailyOutsideTempChartConfigs.data.datasets[0].borderColor =
        window.chartColors.yellow;
      dailyOutsideTempChartConfigs.data.datasets[0].data = sortedOutsideTemp;
      dailyOutsideTempChartConfigs.options.title.text = "Outside";
      this.dailyOutsideTempChart = new Chart(
        document.querySelector("#outside").getContext("2d"),
        dailyOutsideTempChartConfigs
      );
    },
    todayDate() {
      var today = new Date();

      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      return yyyy + "-" + mm + "-" + dd;
    },
  },
});
