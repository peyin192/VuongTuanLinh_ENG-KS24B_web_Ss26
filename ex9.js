function generateRandomArray(minSize = 10, maxSize = 20, minVal = 1, maxVal = 100) {
    let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
    }
    return arr;
}

function sumEvenOdd(arr) {
    let sumEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let sumOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    return { sumEven, sumOdd };
}

let numbers = generateRandomArray();
console.log("Mảng ban đầu:", numbers);
let { sumEven, sumOdd } = sumEvenOdd(numbers);
console.log("Tổng các số chẵn:", sumEven);
console.log("Tổng các số lẻ:", sumOdd);