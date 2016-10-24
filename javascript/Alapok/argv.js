var sum = process.argv.slice(2).map((e) => Number(e)).reduce((acc, e) => acc + e);

console.log(sum);