function insertDoubleHashing(
 table: number[],
 key: number,
 q: number,
 capacity: number,
 fType: string = "",
 a: number | null = 1,
 b: number | null = 0,
 c: number | null = 1
) {
 if (!table.includes(null)) {
  return table;
 }
 let func: number = key;
 switch (fType) {
  case "k":
   func = key;
   break;
  case "+":
   func = a * key + b;
   break;
  case "%":
   func = key % c;
   break;
  default:
   func = key;
   break;
 }
 let hashValue: number = func % capacity;
 let loadFactor: number = capacity / 2;
 let hashFunction: number = key % capacity;
 let secondFunction: number = q - (key % q);

 if (table[hashValue] === null) {
  table[hashValue] = key;
 } else {
  let j: number = 1;
  while (table[hashValue] !== null && j < loadFactor) {
   hashValue = (func + j * secondFunction) % capacity;
   j++;
  }
  if (table[hashValue] === null) {
   table[hashValue] = key;
  }
 }
 return table;
}

function removeDoubleHashing(table: number[], key: number) {
 let index = table.indexOf(key);
 if (index !== -1) {
  table.splice(index, 1, null);
 }
 return table;
}

export { insertDoubleHashing, removeDoubleHashing };
