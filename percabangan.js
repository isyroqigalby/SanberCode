const prompt = require('prompt-sync')({ sigint: true });

const password = prompt ('Enter password : ');
const validPassword = 'password'

//perbandingan password (string) vs validPassword (string)
if (password === validPassword) {
    //jika benar
    console.log ("Selamat datang bos!")
}
else {
    //jika salah
    console.log ("Password yang anda masukkan salah")
}
//print ini apapun yang terjadi
console.log ("Terimakasih telah menggunakan aplikasi kami");
    