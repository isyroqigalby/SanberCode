var car = {
    //properti
    type : "Fiat",
    model : "500",
    color : "white",

    //method
    start: function(namaMobil){
        console.log("Hidupkan mesin mobil " + namaMobil);
    },
    drive: function(){
        console.log("Jalankan mobil");
    },
    brake: function(){
        console.log("Berhentikan mobil");
    },
    stop: function(namaMobil){
        console.log("Matikan mesin mobil " + namaMobil);
    }
};

exports.car = car