//Import dependencies and setup Express.
const express=require('express');
const QRCode=require('qrcode');
const app=express();
const PORT=3000;

//Define QR generation route.
app.get('/qrcode',(req,res)=>{
    //Define the URL that we would like to convert into qr code.
    const url='https://www.example.com';

    //Convert URL->dataURL (QR image representation).
    QRCode.toDataURL(url,(err,qrCodeUrl)=>{
        //Handle QR code generation errors.
        //Conditional statement.
        if(err){
            //If there is an error we will an error response '500 Internal server error'.
            res.status(500).send('Internal Server Error');
        }else{
            res.send(`
                <!DOCTYPE HTML>
                <HTML>
                    <HEAD>
                        <TITLE>QR Code Generator</TITLE>
                    </HEAD>
                    <BODY>
                        <H1>QR Code Generator</H1>
                        <IMG src="${qrCodeUrl}" alt="QR Code">
                        <P>Scan the QR Code to visit the website</P>
                    </BODY>
                </HTML>
            `);
        }
    });
});

//Start the server and listen to request.
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
});