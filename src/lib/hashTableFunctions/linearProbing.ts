function insertLinear(
 table: number[],
 data: number | undefined,
 stepsize: number,
 capacity: number
) {
 // Since the array is preset with undefined values, we can check if the array is full so use this instead to check if the array is full
 if (!table.includes(undefined)) {
  return table;
 }

 let i: number = 0;
 let loopCycles: number = 0; // a loop cycle is a full iteration of the array
 while (loopCycles < 5) {
  // instead of a load factor check, we will limit the loop to 5 cycles
  if (i >= capacity) {
   loopCycles++;
  }

  let index: number = (data + i * stepsize) % capacity;
  if (table[index] === undefined) {
   table[index] = data;
   return table;
  }
  i++;
 }

 return table;
}

function removeLinear(table: any[], data: number) {
 if (!table.includes(data)) {
  return table;
 }
 // They don't have to know this is how we implemented it lol
 table[table.indexOf(data)] = undefined;
 return table;
}

export { insertLinear, removeLinear };
