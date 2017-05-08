'use strict'
 
 function getPrimes(n) {
  var primes = [2,3];

  var checkPrime = function(n) {
    var nIsPrime;
    for(var i = 2; i < n; i++){
           if(n % i === 0){
               nIsPrime = false ;
               break;
           }
           else {
            nIsPrime = true;
           }
      }
      return nIsPrime;
  }

  if (n < 0) {
    return "negative integers can not be prime";
  }
  else if (n === 1) {
    return '1 is not a prime number';  
  }
  else if (n === 2) {
    return [2];
  }
  else if (n === 3) {
    return primes;
  }
  else {
    for(var i = 4; i <= n; i++) {
          if(checkPrime(i) === true ){
              primes.push(i);
          }
    }
    return primes;
  }
}


module.exports = getPrimes;
