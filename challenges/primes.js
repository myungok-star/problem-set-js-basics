/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
//Prime number is greater than 1 and can be divided by only 1 and itself.
function isPrime(num) {
    if (num < 2) {
        return false;
        if (num === 2) {
            return true;
        }
    } else {
        for (var i = 2; num > i; i++) {
            if (num % i === 0) {
                return false;
            } else {
                return true
            }
        }
    }
}

function primes(max) {
    var primeNumbersArray = [];
    for (var i = 2; i < max; i++) {
        if (isPrime(i)) {
            primeNumbersArray.push(i);
        }
    }
    return primeNumbersArray;
}
primes(100);








/*    for (var i = 2; i > num; i++) {
        if (num % i === 0) {
            return false;
        } else {
          return
        }
    }
}*/
