
class MovieCollection extends Array{
    constructor(name, ...items){
        super(...items);
        this.name = name;
    }
    add(movie){
        this.push(movie);
    }
}

const movies = new MovieCollection('My favourite Movies', 
    { name: 'Bee Movie', stars: 10 },
    { name: 'Star Wars Trek', stars: 1 },
    { name: 'Virgin Suicides', stars: 7 },
    { name: 'King of the Road', stars: 8 }
  );

  movies.add({
      name: 'Titanic',
      stars: 8
  })