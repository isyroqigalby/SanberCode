//input data first number -> const (var) number
const num1 = require('prompt-sync')({ sigint: true })('Angka pertama: ');
//input data second number -> const (var) number
const num2 = require('prompt-sync')({ sigint: true })('Angka kedua: ');

//print informasi
console.log('Angka pertama + Angka kedua =');
//perhitungan penjumlahan
//convert ke number/int/float untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));

 

const prompt = require('prompt-sync')({ sigint: true });