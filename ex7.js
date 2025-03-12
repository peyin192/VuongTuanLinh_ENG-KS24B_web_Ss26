const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(num => num ** 2);
const evenNumbers = squaredNumbers.filter(num => num % 2 === 0);

console.log("Mảng số nguyên ban đầu:", numbers);
console.log("Mảng sau khi bình phương:", squaredNumbers);
console.log("Các số chẵn sau khi bình phương:", evenNumbers);