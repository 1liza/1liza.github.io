function parseToMoney(num) {
    num = parseFloat(num.toFixed(3));
    [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,')
    return integer + (decimal ? '.'+decimal : '')
  }
  
console.log(parseToMoney(1087654.34124))  