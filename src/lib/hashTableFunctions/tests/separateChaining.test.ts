// sum.test.js
import { expect, test } from "vitest";
import { generateRandomArray } from "../hashTable";
import { insertSeparateChaining, removeSeparateChaining } from "../separateChaining";

function createHashTable(valuesToInsert: number[]) {
 let table: any[][] = [];
 table.length = 10;
 table.fill([]);
 for (let i = 0; i < valuesToInsert.length; i++) {
  table = insertSeparateChaining(table, valuesToInsert[i]);
 }
 return table;
}

test("Insert [5, 6, 11, 7, 12, 9, 21]", () => {
 expect(createHashTable([5, 6, 11, 7, 12, 9, 21])).toStrictEqual([
  [],
  [11, 21],
  [12],
  [],
  [],
  [5],
  [6],
  [7],
  [],
  [9],
 ]);
});

test("Insert [50, 21, 25, 43, 7, 37]", () => {
 expect(createHashTable([50, 21, 25, 43, 7, 37])).toStrictEqual([
  [50],
  [21],
  [],
  [43],
  [],
  [25],
  [],
  [7, 37],
  [],
  [],
 ]);
});


test("Remove: 25 [ [50],[21],[],[43],[],[25],[],[7, 37],[],[] ]", () => {
    expect(
     removeSeparateChaining([[50],[21],[],[43],[],[25],[],[7, 37],[],[],], 25)
    ).toStrictEqual([[50],[21],[],[43],[],[],[],[7, 37],[],[]]);
   });