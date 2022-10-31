// WRITE YOUR CODE BELOW THIS LINE

// Present some data

let firstFavMovie = {title: "Luca" 
	, year: 2021
	, rating: 7.4
	, description: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human."
	, directors: "Enrico Casarosa"
	, writers: ["Enrico Casarosa", "Jesse Andrews", "Simon Stephenson"]
	, stars: ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman"]
	, genres: ["Animation", "Adventure", "ComedyFamily", "Fantasy"]
}

let secondFavMovie = {title: "Zootopia" 
	, year: 2016
	, rating: 8
	, description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
	, directors: ["Byron Howard", "Rich MooreJared Bush"]
	, writers: ["Byron Howard", "Rich Moore", "Jared Bush"]
	, stars: ["Ginnifer Goodwin", "Jason Bateman"]
	, genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Mystery"]
}

let thirdFavMovie = {title: "Vaiana" 
	, year: 2016
	, rating: 7.6
	, description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
	, directors: ["Ron Clements", "John Musker", "Don Hall"]
	, writers: ["Ron Clements", "John Musker", "Don Hall"]
	, stars: ["Auli'i Cravalho", "Dwayne Johnson"]
	, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
}

let fourthFavMovie = {title: "Frozen" 
	, year: 2013
	, rating: 7.4
	, description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
	, directors: ["Chris Buck", "Jennifer Lee"]
	, writers: ["Jennifer Lee", "Chris Buck"]
	, stars: ["Kristen Bell", "Indina Menzel"]
	, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
}

let favMovies = [firstFavMovie, secondFavMovie, thirdFavMovie, fourthFavMovie] 

// Present some context

console.log("The first movie's title is: " + favMovies[0].title)
console.log("The second movie's release year is: " + favMovies[1].year)
console.log("The third movie's IMDB rating is: " + favMovies[2].rating)
console.log("The fourth movie's short description is: " + favMovies[3].description)

// Present some new data

console.log("The first movie's lead director is: " + favMovies[0].directors[0])
console.log("The second movie's lead writer is: " + favMovies[1].writers[0])
console.log("The third movie's lead star is: " + favMovies[2].stars[0])
console.log("The fourth movie's main genre is: " +favMovies[3].genres[0] )

//Calculate the average rating of the movies
let averageRating = (favMovies[0].rating + favMovies[1].rating +favMovies[2].rating + favMovies[3].rating)/4
console.log(averageRating)

// Calculate the average age of the movies

let firstMovieAge = 2022 - favMovies[0].year
console.log(firstMovieAge)

let secondMovieAge = 2022 - favMovies[1].year
console.log(secondMovieAge)

let thirdMovieAge = 2022 - favMovies[2].year
console.log(thirdMovieAge)

let fourthMovieAge = 2022 - favMovies[3].year
console.log(fourthMovieAge)

let averageAge = (firstMovieAge + secondMovieAge + thirdMovieAge + fourthMovieAge)/4
console.log(averageAge)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
