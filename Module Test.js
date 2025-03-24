function checkNumber(n) {
    let resultCheck = [];
    
    resultCheck.push(n > 0); // we push the bool in the array. true or false.
  
    resultCheck.push(n % 2 === 0);
  
    resultCheck.push(n % 10 === 0);
  
    return resultCheck
  }



/*Is the number positive?
Is the number even?
Is this number divisible by 10?
The function should return an array of boolean values (true and false) representing the results of these checks.*/