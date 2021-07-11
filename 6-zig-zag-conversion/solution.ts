let example1 = {
    s: "PAYPALISHIRING",
    numRows: 3
};

let example2 = {
    s: "PAYPALISHIRING",
    numRows: 4
}

let example3 = {
    s: "A",
    numRows: 1
}

function convert(s: string, numRows: number): string {

    if (numRows === 1) {
        return s;
    }

    let str = s.split("");
    let strLen = str.length;

    let rows: string[][] = [];

    // initialize the rows
    numRows = min(numRows, strLen);
    for (let a = 0; a < numRows; a++) {
        rows.push([]);
    }

    let currRow = 0;
    let isAscending = false;

    for (let char of str) {
        rows[currRow].push(char);

        if (currRow === 0 || currRow === numRows - 1) {
            isAscending = !isAscending;
        }

        isAscending ? currRow++ : currRow--;
    }

    let retVal = "";

    for (let j = 0; j < numRows; j++) {
        retVal += rows[j].join("");
    }

    return retVal;
};

let min = (a: number, b: number): number => {
    return a < b ? a : b;
}

console.log(convert(example1.s, example1.numRows));
console.log(convert(example2.s, example2.numRows));
console.log(convert(example3.s, example3.numRows));