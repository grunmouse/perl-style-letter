const assert = require('assert');
const m = require('../index.js');

describe('perl-style-leter', ()=>{
	describe('Converter', ()=>{
		it('exists', ()=>{
			assert.ok(m.Converter);
		});
		it('instance', ()=>{
			let cnv = new m.Converter('abc');
			assert.ok(cnv);
		});
	});
	describe('number to letter', ()=>{
		let cnv = new m.Converter('abc');
		[
			[0, ""],
			[1, "a"],
			[2, "b"],
			[3, "c"],
			[4, "aa"],
			[5, "ab"],
			[6, "ac"],
			[7, "ba"],
			[8, "bb"],
			[9, "bc"],
			[10, "ca"],
			[11, "cb"],
			[12, "cc"],
			[13, "aaa"],
		].forEach(([value, str])=>{
			it(`${value} == "${str}"`, ()=>{
				assert.equal(cnv.numberToLetter(value), str);
			});
		});
	})	
	describe('letter to number', ()=>{
		let cnv = new m.Converter('abc');
		[
			[0, ""],
			[1, "a"],
			[2, "b"],
			[3, "c"],
			[4, "aa"],
			[5, "ab"],
			[6, "ac"],
			[7, "ba"],
			[8, "bb"],
			[9, "bc"],
			[10, "ca"],
			[11, "cb"],
			[12, "cc"],
			[13, "aaa"],
		].forEach(([value, str])=>{
			it(`${value} == "${str}"`, ()=>{
				assert.equal(cnv.letterToNumber(str), BigInt(value));
			});
		});
	})
	
	describe('long value', ()=>{
		let abc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=\\_+|/<>,.;?";
		let value = 978230124172507899911260068253742404889n;
		let cnv = new m.Converter(abc);
		
		it('eq', ()=>{
			let str = cnv.letter(value);
			let num = cnv.number(str);
			//console.log(str);
			//console.log(num);
			assert.equal(value, num);
		});
	});

});