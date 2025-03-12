function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateRandomArray(minSize = 10, maxSize = 20, minVal = 1, maxVal = 100) {
    let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    return Array.from({ length: size }, () => Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
}

function filterOddPrimes(arr) {
    return arr.filter(num => isPrime(num) && num % 2 !== 0);
}

let numbers = generateRandomArray();
console.log("Mảng ban đầu:", numbers);

let oddPrimes = filterOddPrimes(numbers);
console.log("Các số nguyên tố là số lẻ:", oddPrimes);