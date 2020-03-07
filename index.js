const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

let o = "Odie";

// Add "Odie" to the end of the array append
append.push(o);

//Add "Odie" to the beginning of the prepend array
prepend.unshift(o);

//Remove the LAST pet from the removeLast array
removeLast.pop();

//Remove the FIRST pet from the removeFirst array
removeFirst.shift();
