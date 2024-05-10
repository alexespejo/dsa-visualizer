function insertLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number,
 fType: string = "",
 a: number | null = 1,
 b: number | null = 0,
 c: number | null = 1
) {
 // Since the array is preset with null values, we can check if the array is full so use this instead to check if the array is full
 let func: number = data;
 if (!table.includes(null)) {
  return table;
 }
 switch (fType) {
  case "k":
   func = data;
   break;
  case "+":
   func = a * data + b;
   break;
  case "%":
   func = data % c;
   break;
  default:
   func = data;
   break;
 }
 console.log(func);
 let i: number = 0;
 while (i < capacity) {
  // instead of a load factor check, we will limit the loop to 5 cycles
  let index: number = (func + i * stepsize) % capacity;
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
