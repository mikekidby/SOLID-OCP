import {findGreedy} from './greedy/greedy.js';

let test = 6.27;
let bills = {
	hundredDollar: 100.0,
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

findGreedy(bills, test);