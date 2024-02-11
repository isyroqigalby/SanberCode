const prompt = require('prompt-sync')({ sigint: true });

var ulangi = prompt("Are you ready?"); //input 1
//console.log("Start")
//var counter = 0;

while(ulangi) {
    var jawab = prompt("Apakah anda mau mengulangi? (yes/no) : ")
    counter++;
    if(jawab == false || jawab == "no") {
        ulangi = false
    }
    console.log("Pengulangan ke "+counter);
}