//A function that takes an array and return the sum of even and odd numbers

var myFunc = function(myArray){ 
    //myFunc taking in myArray as parameter
    var sumEven = 0;//sumEven variable to hold the total of even numbers
    var sumOdd = 0; //sumOdd variable to hold sum of odd numbers
      
    myArray.map(el =>{       
        /*
        We use map function to iterate the array
        and check if element is divisble by two without remainder
        if true we accumulate total in sumEven
        if false we accumulate total in sumOdd
        */
        if (el%2 ===0){
          sumEven += el;
      }else{
      sumOdd += el;
      }
    });
    //The function returns an array containing two elements
    //0th index holds sum of even numbers, and 1st index hold sum of odd numbers
    return [sumEven, sumOdd];
  }
  
  //To demonstrate the action of our function we call it with an
  //Array as an argument

  const myArray = [1,2,3,4,5,6,7,8,9,10];

  console.log(myFunc(myArray));

  //returns [30, 25]