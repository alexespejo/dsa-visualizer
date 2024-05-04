// sum.test.js
import { expect, test } from "vitest";
import { insertDoubleHashing, removeDoubleHashing } from "../doubleHashing";

function createHashTable(
    valuesToInsert: number[],
    capacity: number,
    secondFunction: number
) {
    let table: any[] = [];
    table.length = capacity;
    table.fill(null);

    for (let i = 0; i < valuesToInsert.length; i++) {
        table = insertDoubleHashing(table, valuesToInsert[i], secondFunction, capacity);
    }
    return table;
}

test("Insert [18,41,22,44,59,32,31]", () => {
    expect(createHashTable([18, 41, 22, 44, 59, 32, 31], 13, 7)).toStrictEqual([
        31,
        null,
        41,
        null,
        null,
        18,
        32,
        59,
        null,
        22,
        44,
        null,
        null
    ]);
});
