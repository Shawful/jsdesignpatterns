// Global module

var myModule = (function () {
	var module = {};
	var privateVariable = "Hello World";

	function privateMethod() {
		// ...
	}

	module.publicProperty = "foo";
	module.publicMethod = function () {
		console.log( privateVariable );
	}

	return module;
}) ();

// usage
myModule.publicMethod();