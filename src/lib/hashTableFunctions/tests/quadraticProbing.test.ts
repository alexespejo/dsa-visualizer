// sum.test.js
import { expect, test } from "vitest";
import { generateRandomArray } from "../hashTable";
import { insertQuadratic, removeQuadratic } from "../quardaticProbing";

function createHashTable(valuesToInsert: number[], capacity: number) {
 let table: any[] = [];
 table.length = capacity;
 table.fill(null);
 for (let i = 0; i < valuesToInsert.length; i++) {
  table = insertQuadratic(table, valuesToInsert[i], capacity);
 }
 return table;
}

test("Insert [1,2,3,4]", () => {
 expect(createHashTable([1, 2, 3, 4], 10)).toStrictEqual([
  null,
  1,
  2,
  3,
  4,
  null,
  null,
  null,
  null,
  null,
 ]);
});

test("Insert [5, 15, 25]", () => {
    expect(createHashTable([5, 15, 25], 10)).toStrictEqual([
      null,
      null,
      null,
      null,
      null,
      5,
      15,
      null,
      null,
      25,
    ]);
  });

test("Insert [11, 21, 31]", () => {
expect(createHashTable([11, 21, 31], 10)).toStrictEqual([
    null,
    11,
    21,
    null,
    null,
    31,
    null,
    null,
    null,
    null,
 ]);
});

test("Insert [11, 21, 31]", () => {
    expect(createHashTable([11, 21, 31], 10)).toStrictEqual([
      null,
      11,
      21,
      null,
      null,
      31,
      null,
      null,
      null,
      null,
    ]);
  });
  
  test("Insert [5, 15, 25]", () => {
    expect(createHashTable([5, 15, 25], 10)).toStrictEqual([
      null,
      null,
      null,
      null,
      null,
      5,
      15,
      null,
      null,
      25,
    ]);
  });
    

