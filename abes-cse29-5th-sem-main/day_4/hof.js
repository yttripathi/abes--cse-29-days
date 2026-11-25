let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipleOfFive = arr.map((data) => data * 5);
console.log(multipleOfFive);

const divisibleOfFive = arr.filter((data) => data % 5 === 0);
console.log(divisibleOfFive);

const firstDivisibleOfFive = arr.find((data) => data % 5 === 0);
console.log(firstDivisibleOfFive);

const sumOfArr = arr.reduce((data, acc) => acc += data, 0);
console.log(sumOfArr);
