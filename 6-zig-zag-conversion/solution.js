var example1 = {
    s: "PAYPALISHIRING",
    numRows: 3
};
var example2 = {
    s: "PAYPALISHIRING",
    numRows: 4
};
var example3 = {
    s: "A",
    numRows: 1
};
function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var str = s.split("");
    var strLen = str.length;
    var rows = [];
    // initialize the rows
    numRows = min(numRows, strLen);
    for (var a = 0; a < numRows; a++) {
        rows.push([]);
    }
    var currRow = 0;
    var isAscending = false;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        rows[currRow].push(char);
        if (currRow === 0 || currRow === numRows - 1) {
            isAscending = !isAscending;
        }
        isAscending ? currRow++ : currRow--;
    }
    var retVal = "";
    for (var j = 0; j < numRows; j++) {
        retVal += rows[j].join("");
    }
    return retVal;
}
;
var min = function (a, b) {
    return a < b ? a : b;
};
console.log(convert(example1.s, example1.numRows));
console.log(convert(example2.s, example2.numRows));
console.log(convert(example3.s, example3.numRows));
