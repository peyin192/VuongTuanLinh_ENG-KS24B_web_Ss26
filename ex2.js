const arrText = []
let n = parseFloat(prompt(`Nhap so phan tu can nhap`))
for (let i = 0;i < n;i++) {
    arrText[i] = prompt(`Nhap phan tu thu ${i+1}`)
}
const longText = arrText.filter((nume) => nume.length > 5)
console.log(longText)