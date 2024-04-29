function insertDoubleHashing(
    table: number[],
    data: number,
    secondFunction: number,
    capacity: number
) {
    // hash function h(k) = (k + j * h'(k)) % 10
    // double hash function h'(k) = q - (k % q)

    let index: number = data % capacity;
    let loadFactor: number = capacity / 2;

    if (table[index] === 0) {
        table[index] = data;
    } else {
        let j: number = 1;
        while ((table[index] !== 0 || table[index] !== -1) && j < loadFactor) {
            index = ((index % capacity) + (j * (secondFunction - (data % secondFunction)))) % capacity;
            j++;
        }
        if (j < loadFactor) {
            table[index] = data;
        }
    }
    return table;
}

function removeDoubleHashing(
    table: number[],
    data: number,
    secondFunction: number,
    capacity: number
) {

    let index: number = data % capacity;
    let loadFactor: number = capacity / 2;

    if (table[index] === data) {
        table[index] = -1;
    } else {
        let j: number = 1;
        while (table[index] !== data && j < loadFactor) {
            index = ((index % capacity) + (j * (secondFunction - (data % secondFunction)))) % capacity;
            j++;
        }
        if (j < loadFactor) {
            table[index] = -1;
        }
    }
    return table;
}

export { insertDoubleHashing, removeDoubleHashing };
