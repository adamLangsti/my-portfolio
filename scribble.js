// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function findSameNumbers(a, b) {
//     let i = 0;
//     let j = 0;
//     let result = [];

//     while (i < a.length && j < b.length) {
//         if (a[i] === b[j]) {
//             result.push(a[i]);
//             i++;
//             j++;
//         } else if (a[i] > b[j]) {
//             j++;
//         } else {
//             i++;
//         }
//     }
//     return result;
// }

// console.log(findSameNumbers(array1, array2));
// // 2 4 6 8 10

// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum([1,2,3], 4));

// let fibonacci = function (number) {
//     if (number < 2) return number;

//     return fibonacci(number - 1) + fibonacci(number - 2);
// };

// let productFib = function (product) {
//     let num = 0;

//     while (fibonacci(num) * fibonacci(num + 1) < product) {
//         num++;
//     }
//     return [
//         fibonacci(num),
//         fibonacci(num + 1),
//         fibonacci(num) * fibonacci(num + 1) === product,
//     ];
// };

// // 1 1 2 3 5 8 13 21 34 55

// console.log(productFib(714));

const dayOfYear = (date) => {
    Math.floor(
        (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
};

console.log(dayOfYear(new Date()));