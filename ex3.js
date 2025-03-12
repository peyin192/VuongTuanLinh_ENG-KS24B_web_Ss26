function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

let emailInput = prompt(`Nhap email`)
console.log(validateEmail(emailInput))