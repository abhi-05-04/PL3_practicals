const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');
const nodemail = require('nodemailer');
const port = 3000;
const app = express();

// app.get()
// const sendmail = async (mail) => {
//     var transport = nodemail.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'charpaleabhi@gmail.com',
//             pass: '*********'
//         }
//     });
//     console.log('Transport created');
//     transport.sendMail({
//         from:'charpaleabhi@gmail.com',
//         to:mail,
//         subject:'This is module mail',
//         text: 'This is module mail'
//     })
// }

// app.get('/',(req,res)=>{
//     const mail = req.query.mail
//     sendmail(mail)
//     res.send('Email sent successfully.')
// })
app.listen(port,()=>{
    console.log('listening on port '+port);
});