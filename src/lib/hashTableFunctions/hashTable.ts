function generateRandomArray(size: number) {
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

function loadFactor(table: number[], capacity: number) {
 return (
  table.filter((element) => element !== undefined).length / capacity > 0.75
 );
}
function arraysAreEqual(arr1: number[], arr2: number[]) {
 // Check if the arrays have the same length
 if (arr1.length !== arr2.length) {
  return false;
 }

 // Check if every element in arr1 is equal to the corresponding element in arr2
 return arr1.every((value, index) => value === arr2[index]);
}
export { generateRandomArray, loadFactor, arraysAreEqual };
