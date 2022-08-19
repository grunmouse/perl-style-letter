# @grunmouse/perl-letter-style

Модуль для представления чисел в виде строк, с Perl-подобным порядком следования (за Z идёт АА, а за ZZ - AAA).


@class Converter

@constructor\
@param {String} abc - используемый алфавит

@method number(value) - преобразует строку в число\
@param {String} value\
@return {BigInt} 

@method letter(value) - преобразует число в строку\
@param {BigInt|Number} value\
@return {String} 


