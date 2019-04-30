lib = require('../lib');

describe('absolute', ()=>{
	it('should return a positive num if input is positive',() => {
		const result = lib.absolute(1);
		expect(result).toBe(1);
	});
	
	it('should return a positive num if input is negative',() => {
		const result = lib.absolute(-1);
		expect(result).toBe(1);
	});
	
	it('should return a 0 if input 0',() => {
		const result = lib.absolute(0);
		expect(result).toBe(0);
	});
});

describe('great', () => {
  it('should return the greeting message', () => {
  	const result = lib.greet('ahmed');
  	expect(result).toMatch(/ahmed/);
  	expect(result).toContain('ahmed');
  });
});


describe('getCurrencies', ()=>{// array test
	it('should return supported currencies', ()=>{
		const result = lib.getCurrencies();
		expect(result).toEqual(expect.arrayContaining(['EUR','USD', 'AUD']));
	});
});

describe('getProduct', ()=>{//// testing object
  it('should return the product with the given id',()=>{
  	const result = lib.getProduct(1);
  	expect(result).toMatchObject({ id: 1, price: 10 });

  	expect(result).toHaveProperty('id', 1);
  });
});


describe('registerUser', ()=>{//// testing Exceptions
  it('should throw if username is falsy', ()=>{
  	const args = [null, undefined,NaN,'',0, false];
  	args.forEach(a =>{
  		expect(()=>{lib.registerUser(a) }).toThrow();
  	});
  });

  it('should return a user object if valid username is passed', ()=>{
  	const result = lib.registerUser('ahmed');
  	expect(result).toMatchObject({ username: 'ahmed' });
  	expect(result.id).toBeGreaterThan(0);
  });

});


