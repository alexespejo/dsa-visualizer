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

// ≥2 tests inserting without filling the table
test("Insert [18,41,22,44,59,32,31]", () => {
    expect(createHashTable([18, 41, 22, 44, 59, 32, 31], 13, 7)).toStrictEqual([
        31, null, 41, null, null, 18, 32, 59, null, 22, 44, null, null
    ]);
});

test("Insert [6542, 2378, 4895, 1278, 9536, 4658, 2352, 9698, 7525]", () => {
    expect(createHashTable([6542, 2378, 4895, 1278, 9536, 4658, 2352, 9698, 7525], 11, 7)).toStrictEqual([
        4895, 2352, 2378, null, 7525, 1278, null, 9698, 6542, 4658, 9536,
    ]);
});

test("Insert [4371, 1323, 6173, 4195, 9679, 1989, 2093, 1436, 2561]", () => {
    expect(createHashTable([4371, 1323, 6173, 4195, 9679, 1989, 2093, 1436, 2561], 13, 7)).toStrictEqual([
        1989, 2093, 2561, 4371, null, null, 1436, 9679, null, 4195, 1323, 6173, null
    ]);
});

// ≥3 tests that will fail to insert an element
test("Insert [6292, 5006, 7725, 6076, 5636, 6171, 3338, 5966, 4794, 8902]", () => {
    expect(createHashTable([6292, 5006, 7725, 6076, 5636, 6171, 3338, 5966, 4794, 8902], 13, 7)).toStrictEqual([
        6292, 5006, null, 7725, null, 6076, null, 5636, null, 6171, 3338, 4794, 5966
    ]);
});

test("Insert [4815, 4125, 3572, 8313, 5545, 9992, 4749, 3458, 4725, 1222, 2032, 6212]", () => {
    expect(createHashTable([4815, 4125, 3572, 8313, 5545, 9992, 4749, 3458, 4725, 1222, 2032, 6212], 17, 13)).toStrictEqual([
        8313, null, 3572, 5545, 4815, null, 4749, 3458, null, 2032, null, 4125, null, 9992, null, 1222, 4725
    ]);
});

test("Insert [8338, 5590, 1423, 5138, 7516, 1440, 5500, 8410, 7392, 1813]", () => {
    expect(createHashTable([8338, 5590, 1423, 5138, 7516, 1440, 5500, 8410, 7392, 1813], 13, 5)).toStrictEqual([
        5590, 5500, 7516, 5138, null, 8338, 1423, null, 7392, null, 1440, null, 8410
    ]);
});

// ≥2 tests for removal
test("Insert [5925, 4539, 5323, 3649, 5677, 2851, 9477, 6282, 3261]", () => {
    expect(createHashTable([5925, 4539, 5323, 3649, 5677, 2851, 9477, 6282, 3261], 13, 7)).toStrictEqual([
        9477, null, 4539, 5677, 2851, null, 5323, 6282, null, 3649, 5925, 3261, null
    ]);
});
