const Converter = require('./converter.js');

const defaultConverter = new Converter('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const {
	numberToLetter,
	letterToNumber
} = defaultConverter;

module.exports = {
	Converter,
	numberToLetter,
	letterToNumber,
	letterByNumber:numberToLetter,
	numberByLetter:numberToLetter
};