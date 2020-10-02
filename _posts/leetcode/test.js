let num = 123456789;
let ans = String(num).replace(/\d(?=(\d{3})+$)/g, '$&.')
console.log(ans)