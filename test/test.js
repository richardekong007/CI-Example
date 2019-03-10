const assert = require('assert');

describe('Square operation', function (){
	it(' square of 4 should return 16', function(){

		assert.equal(square(4),16);
	});
});

describe('Square root operation', function(){
	it('Square root of 4 should return 2', function(){

		assert.equal(squareRoot(4),2);
	});
});

describe('Cube Root operation', function(){
	it('Cube Root of 27 should be 3', function(){
		assert.equal(cubeRoot(27), 3);
	});
});

describe('Cube operation', function(){
	it('Cube of 3 should return 27', function(){

		assert.equal(cubeOf(3), 27);
	});
});

describe('Quad operation', function(){
	it('Quad of 2 should return 16', function(){
		assert.equal(quadOf(2),16);
	});
});
