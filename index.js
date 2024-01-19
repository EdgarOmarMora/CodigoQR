const qr=require("qrcode");

let data={
    "name":"Cambo Tutorial",
    "email":"abc@cambotutorial.com",
    "gender":"male",
    "id":123
};

let stJson=JSON.stringify(data);

qr.toFile("qr.png",stJson, function(err){
    if(err) return console.log("error");
});