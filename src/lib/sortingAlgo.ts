export function generateRandomIntArray(length) {
 let randomArray: number[] = [];
 let generatedNumbers = {}; // Object to keep track of generated numbers

 // Function to generate a random 3-digit number
 function generateRandomNumber(length) {
    if (length <= 0) {
      throw new Error("Length must be greater than 0");
    }
    if (length === 1) {
      return Math.floor(Math.random() * 9) + 1; // Generates a number between 1 and 9 for single digit
    }
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 // Generate unique 3-digit numbers until the array length is 10
 for (let i = 0; i < 7; i++) {
    let randomNumber = generateRandomNumber(length);
    while (generatedNumbers[randomNumber]) {
      // Regenerate if the number is already generated
      randomNumber = generateRandomNumber(length);
    }
    generatedNumbers[randomNumber] = true;
    randomArray.push(randomNumber);
  }

 return randomArray;
}

export function generateRandomStringArray(length) {
 let randomArray: string[] = [];
 let generatedStrings = {}; // Object to keep track of generated strings

 // Function to generate a random 3-character string
 function generateRandomString() {
  let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result: string = "";
  for (let i = 0; i < length; i++) {
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
