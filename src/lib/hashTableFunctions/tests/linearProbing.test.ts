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
 expect(createHashTable([1, 2, 3, 4], 10, 0)).toStrictEqual([
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
 expect(createHashTable([50, 5, 25], 5, 0)).toStrictEqual([
  50,
  5,
  25,
  undefined,
  undefined,
 ]);
});

test("Insert [10, 20, 52, 35, 26]", () => {
 expect(createHashTable([10, 20, 52, 35, 26], 10, 0)).toStrictEqual([
  10,
  20,
  52,
  undefined,
  undefined,
  35,
  26,
  undefined,
  undefined,
  undefined,
 ]);
});
