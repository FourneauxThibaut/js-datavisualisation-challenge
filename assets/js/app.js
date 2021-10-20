let pays = [];
let dates = [];

document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 2 )' )
    .forEach( element => {
        pays.push( element.textContent );
    } );

let date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 3 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 4 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 5 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 6 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 7 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 8 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 9 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 10 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 11 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 12 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

date = [];
document.getElementById( 'table1' )
    .querySelectorAll( 'tr td:nth-child( 13 )' )
    .forEach( element => {
        date.push( element.textContent );
    } );
    dates.push( date );

pays.forEach( element => {
    element += { 2002 : dates[pays.indexOf(element)] }
    element += { 2003 : dates[pays.indexOf(element)] }
    element += { 2004 : dates[pays.indexOf(element)] }
    element += { 2005 : dates[pays.indexOf(element)] }
    element += { 2006 : dates[pays.indexOf(element)] }
    element += { 2007 : dates[pays.indexOf(element)] }
    element += { 2008 : dates[pays.indexOf(element)] }
    element += { 2009 : dates[pays.indexOf(element)] }
    element += { 2010 : dates[pays.indexOf(element)] }
    element += { 2011 : dates[pays.indexOf(element)] }
    element += { 2012 : dates[pays.indexOf(element)] }
} );

console.log(pays);


/* 
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName; */