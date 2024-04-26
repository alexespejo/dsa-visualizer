function insertSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
    let index = data % capacity;
    table[index].push(data);
    console.log(table);
    return table;
}

function removeSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
 return table;
}

export { insertSeparateChaining, removeSeparateChaining };
