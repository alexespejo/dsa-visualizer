// sum.test.js
import { expect, test } from "vitest";
import { generateRandomArray } from "../hashTable";
import { insertLinear, removeLinear } from "../linearProbing";

function createHashTable(
 valuesToInsert: number[],
 capacity: number,
 stepSize: number
) {
 let table: any[] = [];
 table.length = capacity;
 table.fill(undefined);

 for (let i = 0; i < valuesToInsert.length; i++) {
  table = insertLinear(table, valuesToInsert[i], stepSize, capacity);
 }
 return table;
}

test("Insert [1,2,3,4]", () => {
 expect(createHashTable([1, 2, 3, 4], 10, 1)).toStrictEqual([
  undefined,
  1,
  2,
  3,
  4,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
 ]);
});

test("Insert [50, 5, 25]", () => {
 expect(createHashTable([50, 5, 25], 10, 1)).toStrictEqual([
  50,
  undefined,
  undefined,
  undefined,
  undefined,
  5,
  25,
  undefined,
  undefined,
  undefined,
 ]);
});

test("Insert [1, 50, 30, 20, 5, 1, 4, 6, 45, 312]", () => {
 expect(
  createHashTable([1, 50, 30, 20, 5, 1, 4, 6, 45, 312], 10, 1)
 ).toStrictEqual([50, 1, 30, 20, 1, 5, 4, 6, 45, 312]);
});

test("Insert w/step-size: 3 [50, 2, 30, 57, 13, 25, 89, 3, 69]", () => {
 expect(
  createHashTable([50, 2, 30, 57, 13, 25, 89, 3, 69], 10, 3)
 ).toStrictEqual([50, 69, 2, 30, undefined, 25, 13, 57, 3, 89]);
});

test("Insert w/step-size: 2 [2, 4, 12, 16, 17, 0, 1, 3]", () => {
 expect(createHashTable([2, 4, 12, 16, 17, 0, 1, 3, 20], 10, 2)).toStrictEqual([
  0,
  1,
  2,
  3,
  4,
  undefined,
  12,
  17,
  16,
  undefined,
 ]);
});

test("Remove: 2 [1,2,3,4]", () => {
 expect(
  removeLinear(
   [
    undefined,
    1,
    2,
    3,
    4,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
   ],
   2
  )
 ).toStrictEqual([
  undefined,
  1,
  undefined,
  3,
  4,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
 ]);
});

test("Remove: 30 [1, 50, 30, 20, 5, 1, 4, 6, 45, 312]", () => {
 expect(removeLinear([1, 50, 30, 20, 5, 1, 4, 6, 45, 312], 30)).toStrictEqual([
  1,
  50,
  undefined,
  20,
  5,
  1,
  4,
  6,
  45,
  312,
 ]);
});

test("Remove: 2 w/step-size: 3 [50, 2, 30, 57, 13, 25, 89, 3, 69]", () => {
 expect(
  removeLinear([50, 69, 2, 30, undefined, 25, 13, 57, 3, 89], 2)
 ).toStrictEqual([50, 69, undefined, 30, undefined, 25, 13, 57, 3, 89]);
});
