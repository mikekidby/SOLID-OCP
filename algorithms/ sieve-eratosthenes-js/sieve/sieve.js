// Sieve of Eratosthenes Algorithm

//It finds all prime numbers between 0 and a given limit.

//Time Complexity: O(n log log n), provided the array update is an O(1) operation, as is usually the case.

function getPrimes(input) {
    // Create an array where each element starts as true
    const numsArr = Array.from({ length: input + 1 }, () => true);
  
    // Loop through numsArr starting from numsArr[2]
    // keep running the loop until i is greater than the input's square root
    for (let i = 2; i <= Math.floor(Math.sqrt(input)); i++) {
      // Check if numsArr[i] === true
      if (numsArr[i]) {
        /* 
        convert all elements in the numsArr 
        whose indexes are multiples of i 
        to false
        */
        for (let j = i + i; j <= input; j += i) {
          numsArr[j] = false;
        }
      }
    }
  
    /*
    Using Array.prototype.reduce() method:
      loop through each element in numsArr[]
        if element === true, 
        add the index of that element to result[]
        return result
    */
    const primeNumbers = numsArr.reduce(
      (result, element, index) =>
        element ? (result.push(index), result) : result,
      []
    );
  
    // Return primeNumbers[]
    return primeNumbers;
  }

export default getPrimes;