var ctx = document.getElementById("Chart2")


var _yValues = [];
var _xValues = [];
_yValues = ctx.dataset.key.split(',');
_xValues = ctx.dataset.value.split(',');

        new Chart("Chart2", {
          type: "line",
          data: {
            labels: _yValues,
            datasets: [{
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: _xValues
            }]
          },
          options: {
            legend: {display: false},
            scales: {
              yAxes: [{ticks: {min: 4, max:16}}],
            }
          }
});