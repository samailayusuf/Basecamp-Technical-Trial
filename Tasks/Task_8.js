var number0fThrees = function (n){
        var count = 0;
		let numbers = [];
        while (n > 0)
        {
            if (n % 10 == 3){
                count++;
				numbers.push(n);
			}

            n = parseInt(n / 10, 10);
        }
        return [count, numbers];
    }
 
    
    function numberOfThreesInRange(n){
        
        let count = 0 ;
		//let numbers = [];
 
        
        for (let i = 2; i <= n; i++){
            count += number0fThrees(i);
			//numbers.push(number0fThrees(i));
		}
        return count;
    }
     
    console.log(numberOfThreesInRange(35));
    //console.log(numberOfThreesInRange(100));
	//faulty
	
