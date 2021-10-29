let data = [];
let passedData = [];
let labels = [];
let allcountry = [];
passedData.forEach((element) => {
  allcountry.push(element[0]);
});
document
  .getElementById("table2")
  .querySelectorAll("tr>td")
  .forEach((element) => {
    data.push(element.textContent);
  });

document
  .getElementById("table2")
  .querySelectorAll("tr>th")
  .forEach((element) => {
    data.push(element.textContent);
  });

console.log(labels);

for (let i = 0; i < data.length; i += 3) {
  passedData[i] = [];
  for (let j = 0; j < 3; j++) {
    passedData[i].push(data[i + j]);
  }
}
let chart2 = document.createElement("canvas");
chart2.setAttribute("id", "chartTable2");
chart2.setAttribute("width", "800");
chart2.setAttribute("height", "400");
document.getElementById("Homicides").appendChild(chart2);

let ctx = document.getElementById("chartTable2");
const graph3 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: allCountry,
    datasets: [
      {
        label: "2007-09",
        data: allStats2007,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
      {
        label: "2010-12",
        data: allStats2010,
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          "rgba(54, 162, 235, 0.2)",
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          // 'rgba(255, 99, 132, 1)',
          "rgba(54, 162, 235, 1)",
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "x",
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
