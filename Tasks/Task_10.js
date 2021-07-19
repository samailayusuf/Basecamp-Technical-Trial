let ASCII_SIZE = 256;
let number = 0;
 var result = '';
    function getMaxOccuringChar(str){
     
       //
        let count = new Array(ASCII_SIZE);
        for (let i = 0; i < ASCII_SIZE; i++)
        {
            count[i] = 0;
        }
         
        
        let len = str.length;
        for (let i = 0; i < len; i++)
        {
            count[str[i].charCodeAt(0)] += 1;
        }
        let max = -1;   // Initialize max count
        //let result = ' ';   // Initialize result to contain the letter (character)
         
        for (let i = 0; i < len; i++)
        {
            if (max < count[str[i].charCodeAt(0)])
            {
                max = count[str[i].charCodeAt(0)];
                result = str[i];
                number++;
                //characters.push(str[i]);
            }
        }
        var output = {};
        output[result] = max;
        return output;//{result:max};
    }
     
    
    console.log(getMaxOccuringChar("afhuusnimr443o0sggg"));
