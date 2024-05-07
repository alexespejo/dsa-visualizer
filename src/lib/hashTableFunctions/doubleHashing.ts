function insertDoubleHashing(
 table: number[],
 key: number,
 q: number,
 capacity: number
) {
 let hashValue: number = key % capacity;
 let loadFactor: number = capacity / 2;
 let hashFunction: number = key % capacity;
 let secondFunction: number = q - (key % q);

 if (table[hashValue] === null) {
  table[hashValue] = key;
 } else {
  let j: number = 1;
  while (table[hashValue] !== null && j < loadFactor) {
   hashValue = (hashFunction + j * secondFunction) % capacity;
   j++;
  }
  if (table[hashValue] === null) {
   table[hashValue] = key;
  }
 }
 return table;
}

function removeDoubleHashing(
 table: number[],
 key: number,
 q: number,
 capacity: number
) {
 let hashValue: number = key % capacity;
 let loadFactor: number = capacity / 2;
 let hashFunction: number = key % capacity;
 let secondFunction: number = q - (key % q);

 if (table[hashValue] === key) {
  table[hashValue] = null;
 } else {
  let j: number = 1;
  while (table[hashValue] !== key && j < loadFactor) {
   hashValue = (hashFunction + j * secondFunction) % capacity;
   j++;
  }
  if (table[hashValue] === key) {
   table[hashValue] = -2;
  }
 }
 return table;
}

export { insertDoubleHashing, removeDoubleHashing };
