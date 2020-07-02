window.onload = function () {
  var weekctx = document.getElementById("week").getContext("2d");
  let weekChart = new Chart(weekctx, weekConfig);
  var dayctx = document.getElementById("day").getContext("2d");
  let dayChart = new Chart(dayctx, dayConfig);
};

const app = new Vue({
  el: "#app",
  created() {
    this.fetchCUrrent();
    this.fetchHistory();
  },
  data:{
    currentTempInside:"",
    currentTempOutside:"",
    history:[]
  },
  methods: {
    fetchCUrrent() {
      axios
        .get("https://api.deldesierto.org/climate/lastEntry", {
          headers: {
            Authorization: "59f02390-a2a3-4dc1-b19d-3c37d8933fa0",
          },
        })
        .then((response) => {
          this.currentTempInside = response.data.payload[0].insideTemp;
          this.currentTempOutside = response.data.payload[0].outsideTemp;
          console.log(response.data.payload);
        });
    },
    fetchHistory() {
      axios.get("history.json", {}).then((response) => {
        this.history = response.data.payload;
      });
    },
  },
});
