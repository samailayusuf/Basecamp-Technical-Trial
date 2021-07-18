var passwordValidator = function (myPassword){
    var strings = /^[a-z]+$/i;
    var numbers = /^\d+$/;
    var stringAndNumbers = /^[0-9a-zA-Z]+$/;
    var stringNumbersAndSpecialCharacters = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;
    
    /*
        We set the patterns for alphabets in the variable strings
        for digits in the variable numbers
        for string and numbers in variable stringAndNumbers
        for string, numbers, and special chars in stringNumbersAndSpecialCharacters
    */

    if (myPassword) {
        //We check if an input is supplied
        //We test each pattern with the supplied password
        //if it matches, we return the integer based on the pattern it matched
        if(strings.test(myPassword)){
            return 0;
        }else if(numbers.test(myPassword)){
            return 1;
        }else if(stringAndNumbers.test(myPassword)){
            return 2;
        }else if(stringNumbersAndSpecialCharacters.test(myPassword)){
            return 3;
        }

    }else{
        //we return invalid input if there is no input
        return 'invalid input';
    }

   
}
console.log(passwordValidator(123456322)); //1
console.log(passwordValidator("yusuf")); //0
console.log(passwordValidator("1243wer@#")); //3
console.log(passwordValidator("1243yusuf")); //2
console.log(passwordValidator()); //invalid input
console.log(passwordValidator("")); //invalid input