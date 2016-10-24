var roman = require('./convertToRoman.js');

console.log(roman() === '', 'function exists');
console.log(roman(1) === 'I', '1 -> I');
console.log(roman(2) === 'II', '2 -> II');
console.log(roman(3) === 'III', '3 -> III');
console.log(roman(4) === 'IV', '4 -> IV');
console.log(roman(5) === 'V', '5 -> V');
console.log(roman(8) === 'VIII', '8 -> VIII');
console.log(roman(9) === 'IX', '9 -> IX');
console.log(roman(10) === 'X', '10 -> X');
console.log(roman(11) === 'XI', '11 -> XI');
console.log(roman(13) === 'XIII', '13 -> XIII');
console.log(roman(15) === 'XV', '15 -> XV');
console.log(roman(19) === 'XIX', '19 -> XIX');