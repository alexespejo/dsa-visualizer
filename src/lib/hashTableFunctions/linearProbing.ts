function insertLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 let loadFactor: number = 0;

 if (stepsize !== 0) {
  loadFactor = table.length / capacity;
 }

 for (let i = 0; i < capacity; i++) {
  let index = (data + i * stepsize) % capacity;

  if (table[index] === undefined) {
   table[index] = data;
   return table;
  }
 }

 return table;
}

function removeLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 for (let i = 0; i < table.length; i++) {
  let index: number = (data + i * stepsize) % capacity;

  if (index === i) {
   table[index] = undefined;
   return table;
  }
 }

 return table;
}

export { insertLinear, removeLinear };
