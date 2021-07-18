var isPrime = function (number) {
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }

  /*
    We will use the function from Task_2 to help us achieve Task_3 faster
    We have created another function below to loop through the array
    and use the function above to check if an element in a given index is prime
    if true it pushes the element to the arrayOfPrimeNumbers variable
    Like that we have an array of only prime numbers
  */

var sortPrime = function (myArray){
    arrayOfPrimeNumbers = []; //This varibale will store all prime numbers

    myArray.map( el => isPrime(el) ? arrayOfPrimeNumbers.push(el) : '');
    //we loop through the given array and check using ternary operator
    // if an element is prime, it gets pushed to the 
    //arrayOfPrimeNumbers if true
    return arrayOfPrimeNumbers;
    //the array returns a populated array conatining only prime numbers
}

myArray = [1,2,3,4,5,6,7,8,9,10,11];

//we test the function by supplying an array of positive numbers 

console.log(sortPrime(myArray)); // [2,3,5,7,11]