// modules can have their own namepsaces

var myNamespace = (function () {
	var myPrivateVar, myPrivateMethod;

	// a private counter variable
	myPrivateVar = 0;

	// a private function witch logs any arguments
	myPrivateMethod = function ( foo ) {
		console.log( foo );
	};

	return {

		// a public variable
		myPublicVar: "foo",

		// a public function utilizing privates
		myPublicMethod: function( bar ) {

			// increment our private counter
			myPrivateVar++;

			// Call our private method using bar
			myPrivateMethod( bar );
		}
	};

}) ();


// change public variable
myNamespace.mypublicVar = "test";

// test public mehod
myNamespace.myPublicMethod( "Test Public Method" );