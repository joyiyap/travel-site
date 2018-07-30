// Non ES6 way of writing Javascript

function Person(fullName, favColor) {
	this.name = fullName;
	this.favouriteColor = favColor;
	this.greet = funciton() {
		console.log("Hi my name is " + this.name + ", my favourite color is " + this.favouriteColor + ".");	
	}
}

export default Person;