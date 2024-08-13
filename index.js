const express = require('express');

const app = express();

app.get('/home',(req, res) =>{
    res.json({msg: 'OK'});
})

app.listen(3000,() =>{
    console.log(`Server started at port 3000`);
})