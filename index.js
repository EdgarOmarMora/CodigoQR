const qr=require("qrcode");

let data={
    "name":"Cambo Tutorial",
    "email":"abc@cambotutorial.com",
    "gender":"male",
    "id":123
};

let stJson=JSON.stringify(data);
qr.toString(stJson,{type:"terminal"}, function(err, code){
    if(err) return console.log("error");
    console.log(code);
});