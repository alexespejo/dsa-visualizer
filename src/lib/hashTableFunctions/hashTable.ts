function generateRandomArray(size: number) {
 if (size <= 5) {
  console.error("Array size must be larger than 5");
  return [];
 }

 let randomArray: number[] = [];

 while (randomArray.length < size) {
  let randomNumber: number = Math.floor(Math.random() * 100); // Adjust 100 to the range you desire

  // Check if the number is already in the array
  if (!randomArray.includes(randomNumber)) {
   randomArray.push(randomNumber);
  }
 }

 return randomArray;
}

export { generateRandomArray };
