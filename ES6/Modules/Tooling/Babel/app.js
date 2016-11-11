const age = 100;
const people = ['Lev', 'Bozs'];

const fullNames = people.map(name => `${name} Roz`); 

for(person of people){
    console.log(person);
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

let n = { x, y, ...z };