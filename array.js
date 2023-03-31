// ARRAY
var backboneInterns = ["tolu", "jounpe", "joseph"]

console.log(backboneInterns[0])

// MULTIDIMENSIONAL ARRAY EXAMPLE
var lunchChoices = [["jollof", "semo", "salad"], ["turkey", "white soup", "plantain"]]

let mainDishIndex = 0
let proteinIndex = 1

let firstMainDish = lunchChoices[mainDishIndex][0]
let secondMainDish = lunchChoices[mainDishIndex][1]
let thirdProtein = lunchChoices[proteinIndex][2]

console.log(firstMainDish)
console.log(secondMainDish)
console.log(thirdProtein)

lunchChoices[proteinIndex][0] = "chicken"
console.log(lunchChoices[proteinIndex][0])

console.log(lunchChoices)

// JAGGED ARRAY
var measurements = [[22, 10],[10, 13, 15, 14],[5, 27, 33]];
var total = 0;
var average = 0.0;
console.log(measurements.length)
console.log(measurements[0].length)
for (var row = 0; row < measurements.length; row++) {
    for (var col = 0; col < measurements[row].length; col++) {
   total += measurements[row][col];
}   
average = total / measurements[row].length;
console.log(`Student ${parseInt(row+1)} average is  ${average.toFixed(2)}`);
total = 0;
average = 0.0;
}

// Adding Array Elements or Array Resizing
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
fruits[4] = "Melon";  // Adds a new element (Melon) to fruits at index 4
fruits.unshift("Cashew"); // Adds a new element (Cashew) to fruits at the beginning of the row
fruits.splice(2, 0, "Mango", "Kiwi"); // Adds new elements (Mango & Kiwi) to fruits at index 2

console.log(fruits);

// Search Array
const item = "Pawpaw";
const searchFruits = fruits.filter(fruit => fruit == item);
if (searchFruits == "") {
    console.log(false);
}
else {
    console.log(true);
};

// Array sort
const sortFruits = fruits.sort((a, b) => a === "Kiwi" ? -1 : 1)[0];
console.log(sortFruits);
