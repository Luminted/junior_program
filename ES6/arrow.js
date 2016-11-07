'use strict';

var names = ['mary', 'jane', 'sue']

var fullNames = names.map((e) => `${e} bos`);

const race = '100m dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, place: i + 1, race: race}));

const ages = [1, 58, 39, 40 ,59, 70, 18, 22, 32];

const old = ages.filter((age) => age >= 50); 

console.log(old);