const assert = require('assert');

function square(a){
	return a*a;
}

function squareRoot(a){
	return a**0.5;
}

assert.equal(square(4),16);

assert.equal(squareRoot(4),2);
