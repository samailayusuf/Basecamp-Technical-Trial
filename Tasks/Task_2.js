var isPrime = function(number) {
    //define function isPrime to take a number as parameter
    for(var i = 2; i < number; i++)
    // Since a prime number is only divisible by itself and 1
    // we create a loop to check if the number is divisible by 
    //another number other than itself and 1
      if(number % i === 0) {
          return false;
        }
    //if the number is divisible by any number from 2 to (number - 1)
    //the number is not a prime number
    return number > 1;
    //the function returns true if number is not divisible 
    //by the range specified in the loop, and prime number must be greater 
    //than 1
  }

  //let's put the function in action by passing a number 
  // to check if it is a prime number.

  console.log(isPrime(4));