var replaceSpace = function(myString){
    return myString.replace(/ /g, "%20");
    //we grab the input and replace any space character that appears globally
    //in the string
}

console.log(replaceSpace("My name is Yusuf Samaila")); //My%20name%20is%20Yusuf%20Samaila