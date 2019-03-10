const assert = require('assert');

const index = require('../index');

describe('Square operation', function (){
	it(' square of 4 should return 16', function(){

		assert.equal(index.square(4),16);
	});
});

describe('Square root operation', function(){
	it('Square root of 4 should return 2', function(){

		assert.equal(index.squareRoot(4),2);
	});
});

describe('Cube Root operation', function(){
	it('Cube Root of 27 should be 3', function(){
		assert.equal(index.cubeRootOf(27), 3);
	});
});

describe('Cube operation', function(){
	it('Cube of 3 should return 27', function(){

		assert.equal(index.cubeOf(3), 27);
	});
});

describe('Quad operation', function(){
	it('Quad of 2 should return 16', function(){
		assert.equal(index.quadOf(2),16);
	});
});
