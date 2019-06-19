function isPrime (number) {
for (i = 2 ; i < number ; i++){

  var pembagian = number % i
// console.log (pembagian)
  if (pembagian === 0){
    return false
  }
}
return true
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false