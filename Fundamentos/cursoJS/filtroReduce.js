/*
*
*
* array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])
*/
const nolanData = watchList
.reduce((data, { Director: director, imdbRating: rating }) => {
  if (director === 'Christopher Nolan') {
    data.count++;
    data.sum += Number(rating);
  }
  return data;
}, { sum: 0, count: 0 });
const averageRatings = nolanData.sum / nolanData.count;

let averageRating = watchList
.map(({imdbRating: rating,Director: director})=> ({rating, director}))
.filter(({director}) => director === "Christopher Nolan" )    
.reduce((averageRating, ({imdbRating: rating}) =>
averageRating+=parseFloat(rating)))
;


function getRating(watchList){
    // Add your code below this line
    const averageRating = watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line
    return averageRating;
  }