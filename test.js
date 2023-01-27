const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function findSameNumbers(a, b) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
        } else if (a[i] > b[j]) {
            j++;
        } else {
            i++;
        }
    }
    return result;
}

console.log(findSameNumbers(array1, array2));
// 2 4 6 8 10
