// console.log("Book of Changes")

// There will be 3 coins tossed at the same time

// Heads are worth 3 points  
// Tails are worth 2 points 

// the total points for the 3 coins will be added up

// Need a button to click to start the coin flip




var flipACoin = function() {


	var headorTail = Math.random();

	if (headorTail > .5) {
 	
		// console.log( "HEADS, value of 3")
 		return 3;
	

	}

	else { 
 	
 		// console.log("TAILS, value of 2")
 		return 2;

	}

	

}

console.log(flipACoin())
//////////////////////////////////////////////////
// Now build a function that will call flipACoin 3 times

// a function that will call flipACoin three times, put the results of each flip into an array, and then add the results of the flips together


var coinFlipSum = function() {

	var value = 0

	for(i = 0; i < 3; i ++) {

		value += flipACoin()

}


return value ;
	
}

var totalCoinValue = coinFlipSum();


console.log("totalCoinValue:  " , totalCoinValue)


////////////////////////////////////////////////
// Next, create a function that determines whether the total of the three coins adds up to an ODD or EVEN number.

var isEven = function(totalCoinValue) {

	console.log("total coin value:  ", totalCoinValue);

	return (totalCoinValue % 2 === 0) ? true : false;

	
}

console.log(isEven(totalCoinValue))
// This odd or even recognizer will determine whether the line to be drawn is broken or solid








