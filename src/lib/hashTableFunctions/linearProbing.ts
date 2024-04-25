function insertLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 for (let i = 0; i < capacity; i++) {
  let index = (data + i * stepsize) % capacity;
  if (table[index] === undefined) {
   table[index] = data;
   return table;
  }
 }
 console.log(table);
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

export { insertLinear, removeLinear };
