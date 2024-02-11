function namaFungsi(){
    console.log("Hello world!")
}

function sayHello(nama){
    console.log("Hello " + nama + "!")
}

function perkalian(a,b){
    hasilKali = a*b;
    console.log("Hasil perkalian a*b adalah " + hasilKali)
}

module.exports = {namaFungsi, sayHello, perkalian}