function insertLinear(
 table: number[],
 data: number | undefined,
 stepsize: number,
 capacity: number
) {
 if (!table.includes(undefined)) {
  return table;
 }
 if (table[table.length - 1] === 20) {
  return table;
 }
 let i: number = 0;
 let loopCycles: number = 0;
 while (loopCycles < 5) {
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

 table[table.indexOf(data)] = undefined;
 return table;
}

export { insertLinear, removeLinear };
