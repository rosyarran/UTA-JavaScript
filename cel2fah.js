var readlineSync = require('readline-sync');

var degrees = readlineSync.question("Enter degrees is Celsius: ");
console.log('It is ' + degrees + '!');