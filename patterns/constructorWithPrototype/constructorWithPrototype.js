
function Car( year, model, miles) {
	this.year = year;
	this.model = model;
	this.miles = miles;
}

Car.prototype.toString = function () {
	return this.model + " has driven " + this.miles + " miles.";
}

var vibe = new Car( 2003, "Pontiac Vibe", 125000 );
var buick = new Car (2013, "Buick Verano", 40000 );

console.log (vibe.toString());
// console.log("huh?");
console.log(buick.toString());