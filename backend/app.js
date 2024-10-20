const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use("view",express.static('../frontend/static'));// For surving static files
app.use(express.urlencoded());

//PUG
app.set('view engine','pug');//Set the template engine as pug
app.path('views',path.join(__dirname,'../frontend/views'));//set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('../frontend/views/home.pug',params);
});
app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('../frontend/viewscontact.pug',params);
});


//start server
app.listen(port,()=>{
    console.log(`The application started successfully on port http://127.0.0.1:${port} `);

});
