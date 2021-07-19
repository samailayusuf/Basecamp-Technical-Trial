var isPalindrome = function(str){
    //We convert the string to lower case and check if its 
    //same with the reversed version of itself
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('madam'));//true