export function generateRandomThreeDigitArray() {
 let randomArray: number[] = [];
 let generatedNumbers = {}; // Object to keep track of generated numbers

 // Function to generate a random 3-digit number
 function generateRandomNumber() {
  return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
 }

 // Generate unique 3-digit numbers until the array length is 10
 while (randomArray.length < 7) {
  let randomNumber = generateRandomNumber();
  if (!generatedNumbers[randomNumber]) {
   // Check if the number is not already generated
   generatedNumbers[randomNumber] = true;
   randomArray.push(randomNumber);
  }
 }

 return randomArray;
}

export function generateRandomStringArray() {
 let randomArray: string[] = [];
 let generatedStrings = {}; // Object to keep track of generated strings

 // Function to generate a random 3-character string
 function generateRandomString() {
  let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result: string = "";
  for (let i = 0; i < 3; i++) {
   result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
 }

 // Generate unique 3-character strings until the array length is 10
 while (randomArray.length < 7) {
  let randomString = generateRandomString();
  if (!generatedStrings[randomString]) {
   // Check if the string is not already generated
   generatedStrings[randomString] = true;
   randomArray.push(randomString);
  }
 }

 return randomArray;
}

export function generateRandomFractions(count) {
    let fractions: number[] = [];
    for (var i = 0; i < count; i++) {
        var randomFraction = (Math.random() * 0.98) + 0.01; 
        randomFraction = parseFloat(randomFraction.toFixed(2)); 
        fractions.push(randomFraction);
    }
    return fractions;
}
