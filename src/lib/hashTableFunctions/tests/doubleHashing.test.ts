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

test("Insert [1,2,3,4]", () => {
    expect(createHashTable([1, 2, 3, 4], 10, 1)).toStrictEqual([
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

test("Insert [50, 5, 25]", () => {
    expect(createHashTable([50, 5, 25], 10, 1)).toStrictEqual([
        50,
        null,
        null,
        null,
        null,
        5,
        25,
        null,
        null,
        null,
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
    ).toStrictEqual([50, 69, 2, 30, null, 25, 13, 57, 3, 89]);
});

test("Insert w/step-size: 2 [2, 4, 12, 16, 17, 0, 1, 3]", () => {
    expect(createHashTable([2, 4, 12, 16, 17, 0, 1, 3, 20], 10, 2)).toStrictEqual([
        0,
        1,
        2,
        3,
        4,
        null,
        12,
        17,
        16,
        null,
    ]);
});
