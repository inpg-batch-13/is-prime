function isPrime (number) {
  // Your code here
  for(var i = 2; i < number; i++){
  var bilangan = number % i 
  if(bilangan === 0) {
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