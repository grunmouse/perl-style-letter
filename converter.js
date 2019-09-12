
class PerlStyleLetterConverter{
	
	constructor(abc){
		this.abc = abc;
		this.base = BigInt(abc.length);
	}
	
	get numberToLetter(){
		return this.letter.bind(this);
	}
	get letterToNumber(){
		return this.number.bind(this);
	}

	/**
	 * Преобразует число в строку вида A, B, ... Z, AA, AB, ... (как в перле)
	 * @param {BigInt} value - число
	 * @return {String}
	 */
	letter(value){
		value = BigInt(value);
		var base = this.base,
			nums = [],
			current = value,
			count = 0,
			rest;
		if(value===0n) return "";
		do {
			rest = current % base;
			current = current / base;
			if(rest == 0) {
				rest = base;
				--current;
			}
			nums[count] = this.abc[rest-1n];
			++count;
		} while (current>0);
		return nums.reverse().join("");
	}

	/**
	 * Преобразует строку вида A, B, ... Z, AA, AB, ... (как в перле) в число
	 * @param {String} value - строка
	 * @return {BigInt}
	 */
	number(value){
		var base = this.base,
			nums = value.split("").reverse(),
			i = 0,
			basei = 0n,
			result = 0n,
			ai, zi = 1n
		for(; i<nums.length; ++i){
			basei = basei * base || 1n;
			ai = zi;
			zi = ai + (base-1n) * basei;
			result += ai + BigInt(this.abc.indexOf(nums[i])) * basei;
		}
		return result;
	}
};

module.exports = PerlStyleLetterConverter;