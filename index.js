const qr=require("qrcode");

let data="https://verificacfdi.facturaelectronica.sat.gob.mx/?id=2BEBDCE0-AFD0-11EE-9F03-819E7FEB1B4A&re=CPR910401893&rr=CAJ171016946&tt=7950.00&fe=J3vMUQ=="

qr.toString(data,{type:"terminal"}, function(err, code){
    if(err) return console.log("error");
    console.log(code);
});
