//1. A light switch that can be either on or off.
//  datatype: boolean
//  data structure example: const light = false;
//2. A user's email address.
//  datatype: string
//  data structure example: const email = "name@example.com";
//3. A spaceship with a hull, laser blasters, tractor beam
//  datatype: array
//  data structure example: const spaceship = ["hull", "laser blasters", "tractor beam"];
//4. A list of student names from our class
//  datatype: array
//  data structure example: const classList = ["Chris", "Phi,", "Logan"];
//5. A list of names from our class, each with location
//  datatype: object
//  data structure example:
//  const classList = {
//      name: 'Chris'
//      location: 'New York'   
// }
//6. A list of names from our class, each with location
//  datatype: object
//  data structure example:
//  const classList = {
//     name: 'Chris'
//     location: 'New York'
//     faveShow: 'The Office'   
// }
// Take it Easy
//1.
const rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
console.log(rainbowColors[4]);
//2.
const dan = {
    food: 'pizza',
    hobby: 'yoga',
    town: 'Los Angeles',
    faveType: 'Boolean',
};
console.log(dan.hobby)
const crazyObject
 = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);
  crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk.");
  console.log(crazyObject.larry.quotes);
  //Activity
  //
//   const colors = ['blue', 'green'];
//   for (let i = 0; i <= colors.length; i++) {
//       console.log(colors);
//   }
//   colors.push("black");
//   console.log(colors)

