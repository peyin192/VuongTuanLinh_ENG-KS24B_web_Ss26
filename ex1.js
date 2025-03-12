const arrNumber = []
for (let i = 0;i < 10;i++) {
    arrNumber[i] = parseFloat(prompt(`Nhap so thu ${i+1}`))
}
const result = arrNumber.filter((num) => num >= 10)
console.log(result) 