const app = new Vue({
  el: "#app",
  created() {
    this.InitializeChartsCanvas();
    //?past miliseconds for periodic fetch;
    this.fetchCurrentTemp();
    this.fetchHistory();
  },
  data: {
    currentTempInside: "",
    currentTempOutside: "",
    history: [],
  },
  methods: {
    fetchCurrentTemp(interval) {
      interval
        ? setInterval(this.fetchCurrent(), interval)
        : this.fetchCurrent();
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
          this.history = response.data.payload.reverse();
          let dailyData = this.getDailyResults(this.history);
          let dailyDataByHour = this.groupDataByHour(dailyData);
          console.log(dailyDataByHour);
          //this.updateDailyChart(dailyData);

          $(document).ready(function () {
            $("#history").DataTable({
              responsive: true,
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
        new Chart(document.querySelector("#day").getContext("2d"), dayConfig);
      };
    },
    getDailyResults(history) {
      let daily = history.filter((temp) =>
        temp.created.includes(this.todayDate())
      );
      return daily;
    },
    groupDataByHour(data) {
      let results = data.reduce(function (r, a) {
        let currentHour = a.created.split("T")[1].split(":")[0];
        r[currentHour] = r[currentHour] || [];
        r[currentHour].push(a);
        return r;
      }, Object.create(null));

      //average of any hour
      for (const hour in results)
        results[hour] =
          results[hour].reduce((prev, next) => prev + next.insideTemp, 0) /
          results[hour].length;

      return results;
    },
    updateDailyCharts() {},
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
