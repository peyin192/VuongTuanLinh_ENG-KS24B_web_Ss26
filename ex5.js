let numbers = [];

function enterArray() {
    let input = prompt("Enter 10 integers");
    numbers = input.split(",").map(Number);
    if (numbers.length !== 10) {
        console.log("Please enter exactly 10 integers!");
        enterArray();
    }
}

function findMaxNumber() {
    let maxNumber = Math.max(...numbers);
    let index = numbers.indexOf(maxNumber);
    console.log("The largest number in the array is:", maxNumber);
    console.log("Its position in the array is:", index);
}

enterArray();
findMaxNumber();
