function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
}
let numberInput = []
let n = parseFloat(prompt("Nhap so phan tu trong mang"))
 for (let i = 0;i < n;i++) {
    numberInput[i] = parseFloat(prompt(`Nhap so thu ${i+1}`))
    isPrime(numberInput[i])
    if (isPrime(numberInput[i]) == true) {
        
    }
 }
for (let i = 0;i < n;i++) {
    console.log(isPrime(numberInput[i]))
}