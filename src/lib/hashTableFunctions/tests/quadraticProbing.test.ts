// sum.test.js
import { expect, test } from "vitest";
import { generateRandomArray } from "../hashTable";
import { insertQuadratic, removeQuadratic } from "../quardaticProbing";

function createHashTable(valuesToInsert: number[], capacity: number) {
 let table: any[] = [];
 table.length = capacity;
 table.fill(undefined);
 for (let i = 0; i < valuesToInsert.length; i++) {
  table = insertQuadratic(table, valuesToInsert[i], 1, capacity);
 }
 return table;
}

test("Insert [1,2,3,4]", () => {
 expect(createHashTable([1, 2, 3, 4], 10)).toStrictEqual([
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
 expect(createHashTable([50, 5, 25], 5)).toStrictEqual([
  50,
  5,
  25,
  undefined,
  undefined,
 ]);
});
