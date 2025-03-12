const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(num => num ** 2);

const evenNumbers = squaredNumbers.filter(num => num % 2 === 0);

console.log("Mảng số nguyên ban đầu:", numbers);
console.log("Mảng sau khi bình phương:", squaredNumbers);
console.log("Các số chẵn sau khi bình phương:", evenNumbers);

function formatDates(dateArray) {
    return dateArray.map(date => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    });
}

const dateList = ["2025-03-13", "2024-12-01", "2023-07-20"];
const formattedDates = formatDates(dateList);
console.log("Danh sách ngày được định dạng:", formattedDates);
