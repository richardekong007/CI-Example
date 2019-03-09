const assert = require('assert');

function square(a){
	return a*a;
}

function squareRoot(a){
	return a**(1/2);
}

function cubeOf (a){
	return a ** 3;
}

function cubeRoot(a){
	return a**(1/3);
}

function quadOf(a){
	return a**4;
}

assert.equal(square(4),16);

assert.equal(squareRoot(4),2);

assert.equal(cubeRoot(27), 3);

assert.equal(cubeOf(3), 27);

assert.equal(quadOf(2),16);
