function generateRandomArray(size) {
 if (size <= 5) {
  console.error("Array size must be larger than 5");
  return [];
 }

 let randomArray = [];

 while (randomArray.length < size) {
  let randomNumber = Math.floor(Math.random() * 100); // Adjust 100 to the range you desire

  // Check if the number is already in the array
  if (!randomArray.includes(randomNumber)) {
   randomArray.push(randomNumber);
  }
 }

 return randomArray;
}

function insertSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
 return table;
}

function removeSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
 return table;
}

function insertLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 return table;
}

function removeLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 return table;
}

function insertQuadratic(table: number[], data: number, capacity: number) {
 return table;
}

function removeQuadratic(table: number[], data: number, capacity: number) {
 return table;
}

function insertDoubleHashing(
 table: number[],
 data: number,
 secondFunction: number,
 capacity: number
) {
 return table;
}

function removeDoubleHashing(
 table: number[],
 data: number,
 secondFunction: number,
 capacity: number
) {
 return table;
}

export {
 insertLinear,
 removeLinear,
 generateRandomArray,
 insertQuadratic,
 removeQuadratic,
 insertDoubleHashing,
 removeDoubleHashing,
};
