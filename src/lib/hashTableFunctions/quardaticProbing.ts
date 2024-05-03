function insertQuadratic(table: any[], data: number | any, capacity: number)
    : number[] {
    //checks for space in table
    if(!table.includes(null))
    {
        return table;
    }

    let i: number = 0;
    while (i < capacity) {
        let index: number = (data + i ** 2) % capacity;
        if (table[index] === null) {
            table[index] = data;
            return table;
        }
        i++;
    }
    return table;
}

function removeQuadratic(table: any[], data: number): number[] {
    //checks if data in table
    if(!table.includes(data)) {
        return table;
    }
    
    table[table.indexOf(data)] = null;
    return table;
}

export { insertQuadratic, removeQuadratic };
