function insertSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
    let index = data % capacity;

    if (!table[index]) {
        table[index] = [];
    }

    table[index].push(data);
    console.log(table);
    return table;
}

function removeSeparateChaining(
 table: number[][],
 data: number,
 capacity: number
) {
    let index = data % capacity;
    let bucket = table[index];
    
    let dataIndex = bucket.indexOf(data); 

    if (dataIndex !== -1) { //-1 means data not found

        bucket.splice(dataIndex, 1); //remove the data from the bucket
        console.log("Data removed:", data);
    } else {
        console.log("Data not found:", data);
    }

    console.log(table); //console.log is used to see the changes in the table

 return table;
}

export { insertSeparateChaining, removeSeparateChaining };
