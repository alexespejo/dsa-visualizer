function insertLinear(
 table: number[],
 data: number | null,
 stepsize: number,
 capacity: number
) {
 // Since the array is preset with null values, we can check if the array is full so use this instead to check if the array is full
 if (!table.includes(null)) {
  return table;
 }

 let i: number = 0;
 while (i < capacity) {
  // instead of a load factor check, we will limit the loop to 5 cycles
  let index: number = (data + i * stepsize) % capacity;
  if (table[index] === null) {
   table[index] = data;
   return table;
  }
  i += 1;
 }
 return table;
}

function removeLinear(table: any[], data: number) {
 if (!table.includes(data)) {
  return table;
 }
 // They don't have to know this is how we implemented it lol
 table[table.indexOf(data)] = null;
 return table;
}

export { insertLinear, removeLinear };
