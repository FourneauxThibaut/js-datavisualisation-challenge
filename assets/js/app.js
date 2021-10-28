const allData = [];
const countryName = [];
const CountryData = [];
const year = [];

// get data
document.getElementById( 'table1' )
    .querySelectorAll( 'tr > td' )
    .forEach( element => { allData.push( element.textContent ) } );
console.log(allData);

// sort data by country
for (let i = 0 ; i < allData.length ; i += 12) {
    CountryData[i] = [];
    for (let j = 0 ; j < 12 ; j++) {
        CountryData[i].push(allData[ i+j ]);
    }
}
console.log(CountryData);

// sort country name out of the datalist
CountryData.forEach(element => {
    countryName.push(element[0]);
    element.shift();
});
console.log(countryName);

// sort labels
document.getElementById( 'table1' )
    .querySelectorAll( 'tr > th' )
    .forEach( element => {
        year.push( element.textContent );
    } );
year.splice(0, 5);
year.splice(11, 45);
console.log(year);

//Chart table1
let chart1 = document.createElement('canvas');
chart1.setAttribute("id","chartTable1");
chart1.style.width = "100%"
document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").appendChild(chart1);







const ctx = document.getElementById('chartTable1').getContext('2d');

const data = {
    label: year,
    datasets: [
        {
            data: CountryData[0],
            label: countryName[0],
            backgroundColor: '#FF9100',
            borderColor: '#FFEBD1',
            tension: 0.3,
        },
        {
            data: CountryData[1],
            label: countryName[1],
            backgroundColor: '#3352ff',
            borderColor: '#5386c8',
            tension: 0.3,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 6,
        hitRadius: 20,
        hoverRadius: 8,
        responsive: true,
    },
};

const myChart = new Chart(ctx, config);