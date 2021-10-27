import { Chart } from 'chart.js';

let data = [];
let passedData = [];

// get data
document.getElementById( 'table1' )
    .querySelectorAll( 'tr > td' )
    .forEach( element => {
        data.push( element.textContent );
    } );

// sort data by country
for (let i = 0 ; i < data.length ; i += 12) {
    passedData[i] = [];
    for (let j = 0 ; j < 12 ; j++) {
        passedData[i].push(data[ i+j ]);
    }
}

//Chart table1
let chart1 = document.createElement('canvas');
chart1.setAttribute("id","chartTable1");
chart1.setAttribute("width","700");
chart1.setAttribute("height","350");
document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").appendChild(chart1);


/* const ctx = document.getElementById('chartTable1').getContext('2d');
const chartTable1 = new chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); */