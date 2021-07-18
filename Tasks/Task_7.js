var standardDeviation = function(myArray){
    var sum = myArray.reduce((a,b) => a+b, 0);
    var mean = sum / myArray.length;//we first find the mean

    var numerator = 0;
    var numeratorCalculator = myArray.map(el => {
        numerator += (Math.pow(el - mean, 2));
        //here we calculated the sum of (el-mean)^2 as the numerator
    });

    var denominator = myArray.length - 1; // denominator is n-1

    var standardDeviation = numerator / denominator ;
    return Math.sqrt(standardDeviation);
    //standardDeviation is the square root of the calculated 
    //numerator and denominator
}

console.log(standardDeviation([82,93,98,89,88])); //5.958187643906492
console.log(standardDeviation([76,84,69,92,58,89,73,97,85,77]));//11.709445380166864