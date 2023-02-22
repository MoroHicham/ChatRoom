
// To import any lib in nodejs , we use required function 
const express=require('express');
const app=express();

// Server Creation 

// Each server has an ip adress and a Port Number : in this case we have localhost : 127.0.0.1 with any chosen port
const port= process.env.PORT || 8000;

// Endpoint Creation : URL : https://localhost:8000/index
// HTTP Methods : GET ? POST ? PUT ? DELETE 
app.get('/',(req,res)=> {
    res.set('Content-Type', 'text/html');
    res.send('<h1>Hello World</h1>');
});

// Listener side creation 
app.listen(port,() => {
    console.log('Server app listening on port ' + port);
});