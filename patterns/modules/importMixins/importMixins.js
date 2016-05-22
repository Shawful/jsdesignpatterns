// Global Module
// don't expect this tow ork because jQ and _ (jQuery and underscore) are not defined

var myModule = (function ( jQ, _ ) {
	
	function privateMethod1() {
		jQ(".container").html("test");
	}

	function privateMethod2() {
		console.log( _.min([10, 5, 100, 2, 1000]) );
	}

	return {
		publicMethod: function () {
			privateMethod1();
		}
	};

}) (jQ, _);


// Call the public method and get acces to injected/imported mixins (code libraries)
myModule.publicMethod();