// NOTES:
//Input currency types of a certain denomination
//Greedy works best with USD. You should seek another solution 
//Will not be best for a currency system with 1 7 10. If you ask for 15 you will get 10 and 5 1s rather than  2 7s and 1 dollar

let findGreedy = (currency, amount) => {
	
	//ResultBill is all the bill types and amount of bills we are returning
	let bills = {};
	let leftover = amount;

	//We are checking from the highest bill first to the lowest
	for (let key in currency)
	{
		//While amount leftover is greater than our current bill
		//we take and subtract it based on the bill's value
		while (leftover >= currency[key])
		{
			//Checking to see if the bill type already exist in our return hash.
			if (bills[key])
			{   //If it does, we increment the bill by one.
				bills[key] += 1;
			}   
			else
			{   //if it doesn't, we add the new key/value pair into the hash.
				bills[key] = 1;
			}
			//Then we subtract the value from the leftover cash.
			//toFixed(2), this is for fixing any float point errors that JavaScript have.
			//The 2 is to fix it for 2 decimal point.
			leftover = (leftover - currency[key]).toFixed(2)
		}
	}
	return bills;
    
}

export default findGreedy;