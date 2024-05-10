function insertQuadratic(
 table: any[],
 data: number | any,
 capacity: number,
 fType: string = "",
 a: number | null = 1,
 b: number | null = 0,
 c: number | null = 1
): number[] {
 //checks for space in table
 if (!table.includes(null)) {
  return table;
 }

 let func: number = data;
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

 let i: number = 0;
 while (i < capacity) {
  let index: number = (func + i ** 2) % capacity;
  if (table[index] === null) {
   table[index] = data;
   return table;
  }
  i++;
 }
 return table;
}

function removeQuadratic(table: any[], data: number): number[] {
 //checks if data in table
 if (!table.includes(data)) {
  return table;
 }

 table[table.indexOf(data)] = null;
 return table;
}

export { insertQuadratic, removeQuadratic };
