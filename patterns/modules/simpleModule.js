var testModule = (function() {
	// private variables
	var counter = 0;

	// everything in the returned object is publicly available: methods and properties!
	return {
		incrementCounter: function() {
			return counter++;
		},

		resetCounter: function () {
			console.log( "The count has been reset.  It was equal to: " + counter );
			counter = 0;
		}
	};
}) ();

// usage

// increment our counter
testModule.incrementCounter();

// check our counter and reset our counter
// output: The count has been reset.  It was equal to: 1
testModule.resetCounter();