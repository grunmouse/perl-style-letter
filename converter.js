
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
			rest;
		while(current!==0n) {
			rest = current % base;
			current = current / base;
			if(rest === 0n) {
				rest = base;
				--current;
			}
			nums.push(this.abc.charAt(Number(rest)-1));
		};
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
			basei = 1n,
			result = 0n;
		for(; i<nums.length; ++i){
			result += BigInt(this.abc.indexOf(nums[i])+1) * basei;
			basei = basei * base;
		}
		return result;
	}
};

module.exports = PerlStyleLetterConverter;