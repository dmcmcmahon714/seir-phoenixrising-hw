const adventurer = {
	name: "Timothy",
	hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
		name: "Velma",
        type: "Bat",
        companion: {
			name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
    },
    companion2: {
        name: "George",
        type: "Insect"
    }
}

// console.log(adventurer.belongings)

// console.log(adventurer.belongings[0]);

// adventurer.belongings.push("Vogue Magazine");

// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion)

// console.log(adventurer.companion.name)

// console.log(adventurer.companion.type)

// adventurer.companion.name = ("Susan")

// console.log(adventurer.companion.name)

// console.log(adventurer.companion.companion.type)

// console.log(adventurer.companion.companion.belongings[2])

const movies = 
            [ { title: "Tokyo Story" },  
            { title: "Paul Blart: Mall Cop" }, 
            { title: "L'Avventura" } ];

// console.log(movies[0]);

// console.log(movies[0].title);

// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

const monster =  {
	name: 'Slimer',
	age: 6
}

const someVar = 'name';

// console.log(monster[someVar]);  // same as monster['name'];

// const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }

// for (let key in movie) {
// 	console.log(key);
// }

// for (let key in movie) {
// 	console.log(movie[key]);
// }

// console.log(Object.keys(movie));

// const keys = Object.keys(movie);

// for (let i=0; i < keys.length; i++) {
// 	console.log(movie[keys[i]]);
// }

const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

// console.log(Object.keys(movie));

const keys = Object.keys(movie);

for (let i=0; i < keys.length; i++) {
	console.log(movie[keys[i]]);
}