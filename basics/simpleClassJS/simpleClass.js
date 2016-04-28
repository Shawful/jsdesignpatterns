
// Javascript is a classless programming language, but classes may be simulated in the following manner

// A car "class"
function Car( model ) {
	this.model = model;
	this.color = "silver";
	this.year = "2012";

	this.getInfo = function () {
		return this.model + " " + this.year;
	};
}