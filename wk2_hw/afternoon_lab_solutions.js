// Easy Does it
//1
const quotes = ["man", "woman", "child"]
//Random
//1
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
//2
randomThings[2] = "World";
//3
//[ 1, 10, 'World', true ]
//We've Got Class
//1
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]
console.log(ourClass[2]);
//2
ourClass[2] = "Octocat";
console.log(ourClass);
//3
ourClass[4] = "Cloud City";
console.log(ourClass);
//Mix It Up
//4
var myArray = [5, 10, 500, 20]
//5
myArray.push("Egon");
console.log(myArray);
//6
myArray.pop();
console.log(myArray);
//7
myArray.unshift("Bob Marley");
console.log(myArray);
//8
myArray.shift("Bob Marley");
console.log(myArray);
//9
myArray.reverse();
console.log(myArray);
//Biggie Smalls
//1&2
var myArray = [5, 10, 500, 20];
    for(i=0;i<myArray.length;i++) {
        if (myArray[i] < 100) {
            console.log('little number');
        } else if (myArray[i] > 100) {
            console.log('big number');
    }
}
var myArray = [5, 10, 500, 20, 6]
    for(i=0;i<myArray.length;i++) {
    if (myArray[i] < 5) {
        console.log('little number');
    } else if (myArray[i] > 10) {
        console.log('big number');
    } else  {
            console.log('monkey');
}
}

  //What's in Your Closet
const kristynsCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie",
"green pants", "yellow knit hat", "marshmallow peeps"];

const thomsCloset = [["grey button-up", "dark grey button-up", "light-blue button-up", "blue button-up"],["grey jeans", "jeans", "PJs"], ["wool mittens", "wool scarf", "raybans"]];
//1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today.");
//2
kristynsCloset.shift("left shoe");
console.log(kristynsCloset);
const kristynShoe = ("left shoe");
console.log(kristynShoe);
//3
kristynsCloset.splice(5, 0, "raybans");
console.log(kristynsCloset);
//4
kristynsCloset[4] = ("stained knit hat");
console.log(kristynsCloset);
//5
console.log(thomsCloset[0][0]);
//6
console.log(thomsCloset[1][1]);
//7
console.log(thomsCloset[2][0]);
//8
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!");
//9
thomsCloset[1][2] = ("footie pajamas");
console.log(thomsCloset);