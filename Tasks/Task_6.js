
var findThreeNumbers = function(myArray, sum)
{
    //The function takes two inputs, the array and the sum of three
 
    //We use three loops to search for the three numbers in the array
    for (let a = 0; a < myArray.length - 2; a++){
        
        for (let b = a + 1; b < myArray.length - 1; b++){
             
            for (let c = b + 1; c < myArray.length; c++){
                if (myArray[a] + myArray[b] + myArray[c] == sum)
                {
                   return [ myArray[a], myArray[b], myArray[c] ];
                    
                }
            }
        }
    }
 
    // We return false if no three numbers found
    return false;
}
 
  
    let myArray = [1, 2, 3, 4, 5, 6];
    let sum = 6;


    console.log(findThreeNumbers(myArray, sum)); //[1,2,3]
