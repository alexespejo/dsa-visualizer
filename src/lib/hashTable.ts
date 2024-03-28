function mod(data: number, capacity: number) {
 return data % capacity;
}
export function insertLinear(
 table: number[],
 data: number,
 stepsize: number,
 capacity: number
) {
 let hash = data % capacity;
 if (table[hash] === undefined) {
  table[hash] = data;
  return table;
 }
 let cycle = hash;
 hash = mod(data + stepsize, capacity);
 let i = 1;
 while (hash !== cycle) {
  if (table[hash] === undefined) {
   table[hash] = data;
   return table;
  }
  i += 1;
  if (i >= capacity) {
   i = 0;
  }
  hash = mod(data + stepsize * i, capacity);
 }
}

export function removeLinear(
 table: number[],
 search: number,
 capacity: number
) {
 let hash = search % capacity;
 if (table[hash] === search) {
  table[hash] = undefined;
  return table;
 }
 let cycle = hash;
 hash = mod(search + 1, capacity);
 let i = 1;
 while (hash !== cycle) {
  if (table[hash] === search) {
   table[hash] = undefined;
   return table;
  }
  i += 1;
  if (i >= capacity) {
   i = 0;
  }
  hash = mod(search + i, capacity);
 }
}
