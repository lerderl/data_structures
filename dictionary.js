// create an empty dictionary using the "Object" keyword
let dictionary = new Object();
// Create an empty dictionary
let countryDictionary = {
  1: { Team: "Argentina" },
  2: { Team: "France" },
};

// Add a new item to a dictionary
countryDictionary[3] = { Team: "Morocco" };
countryValue = countryDictionary[1];

console.log(countryDictionary);
console.log(countryValue);

// iterate over each item
console.log(Object.keys(countryDictionary));

// use the list of keys to loop through each item in the dictionary, and retrieve the value for each key
for (const key of Object.keys(countryDictionary)) {
  console.log(key + ": ");
  console.log(countryDictionary[key]);
}

// check if a key exists in the dictionary
let inDictionary = "Mocha" in countryDictionary;

console.log(inDictionary);

// remove an item
delete countryDictionary[3];
