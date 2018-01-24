var C = {}; ////C is now an object
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
C.getChange = function(totalPayable, cashPaid){ ////getChange is now a function that returns true
	'user strict'
	var change = []
	var remaining = cashPaid - totalPayable;

	for (var i = 0; i < C.coins.length; i++){ ///loop through the array of coins
		var coin = C.coins[i];

		if(remaining/coin >= 1){ //check if coin fits in remaining amount
			var times = Math.floor(remaining/coin); //no partial coins

			for(var j = 0; j < times; j++){ //add coin to change x times
				change.push(coin); 
				remaining = remaining - coin; //subtract coin from remaining
			}
		}
	}
	return change
};

module.exports = C; ////export our module